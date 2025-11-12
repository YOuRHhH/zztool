import { defaultCheckEmpty, isNode } from "../../utils/public";
import { getType } from "../getType/getType";
export function isEmpty(data, options = {}) {
    const { returnKeys = false, parentKey = '', checkEmptyFn, ignoreKeys = [], maxDepth = Infinity, } = options;
    // 防止循环引用
    if (data === null || data === undefined) {
        return true;
    }
    if (typeof data === 'string' && data.trim() === '') {
        return true;
    }
    if (Array.isArray(data) && data.length === 0) {
        return true;
    }
    if (getType(data) === 'object' && Object.keys(data).length === 0) {
        return true;
    }
    const seen = new WeakSet();
    const checkEmpty = checkEmptyFn || defaultCheckEmpty;
    if (data && typeof data === "object") {
        seen.add(data);
    }
    const resultKeys = [];
    function traverse(obj, currentKey, depth) {
        if (depth > maxDepth)
            return;
        // FIX: 稀疏数组(new Array(10))
        if (Array.isArray(obj) && obj.length > 0 && Object.entries(obj).length == 0) {
            resultKeys.push(currentKey);
        }
        // FIX: Buffer 对象
        if (isNode && Buffer.isBuffer(obj) && !obj.toString()) {
            resultKeys.push(currentKey);
        }
        // 防止其他类型递归
        typeof obj === 'object' && Object.entries(obj).forEach(([key, value]) => {
            const fullKey = currentKey ? `${currentKey}.${key}` : key;
            if (ignoreKeys.includes(fullKey)) {
                return; // 忽略指定字段
            }
            const isEmptyVal = checkEmpty(value);
            if (isEmptyVal) {
                resultKeys.push(fullKey);
            }
            else {
                if (!seen.has(value)) {
                    traverse(value, fullKey, depth + 1);
                }
            }
        });
    }
    traverse(data, parentKey, 1);
    return returnKeys ? resultKeys : resultKeys.length > 0;
}
