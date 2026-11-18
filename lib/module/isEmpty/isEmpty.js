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
        if (Array.isArray(obj) && obj.length > 0 && Object.keys(obj).length === 0) {
            resultKeys.push(currentKey);
        }
        // FIX: Buffer 对象
        if (isNode && typeof Buffer !== 'undefined' && Buffer.isBuffer(obj) && !obj.toString()) {
            resultKeys.push(currentKey);
        }
        // 防止其他类型递归
        typeof obj === 'object' && Object.keys(obj).forEach(key => {
            const fullKey = currentKey ? `${currentKey}.${key}` : key;
            if (ignoreKeys.indexOf(fullKey) !== -1) {
                return; // 忽略指定字段
            }
            const value = obj[key];
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
