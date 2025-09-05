import { getType } from "./getType";
export function dataAllEmpty(data, options = {}) {
    const { returnKeys = false, parentKey = '', checkEmptyFn, ignoreKeys = [], maxDepth = Infinity, } = options;
    // 防止循环引用
    const seen = new WeakSet();
    if (Array.isArray(data) && data.length === 0) {
        return false;
    }
    if (typeof data === "object" && data !== null && Object.keys(data).length === 0) {
        return false;
    }
    const checkEmpty = checkEmptyFn || function defaultCheckEmpty(value) {
        if (getType(value) === 'number') {
            return value === 0;
        }
        return (value === "" ||
            value === null ||
            value === undefined || (typeof value === "object" && true && (Array.isArray(value) ? value.length === 0 : Object.keys(value).length === 0)));
    };
    seen.add(data);
    const resultKeys = [];
    function traverse(obj, currentKey, depth) {
        if (depth > maxDepth)
            return;
        Object.entries(obj).forEach(([key, value]) => {
            const fullKey = currentKey ? `${currentKey}.${key}` : key;
            if (ignoreKeys.includes(fullKey)) {
                return; // 忽略指定字段
            }
            const isNotEmpty = !checkEmpty(value);
            if (isNotEmpty) {
                if (!seen.has(value)) {
                    traverse(value, fullKey, depth + 1);
                }
            }
            else {
                resultKeys.push(fullKey);
            }
        });
    }
    traverse(data, parentKey, 1);
    return returnKeys ? resultKeys : resultKeys.length > 0;
}
