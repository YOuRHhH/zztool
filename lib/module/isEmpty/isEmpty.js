import { defaultCheckEmpty } from "../../utils/public";
export function isEmpty(data, options = {}) {
    const { returnKeys = false, parentKey = '', checkEmptyFn, ignoreKeys = [], maxDepth = Infinity, } = options;
    // 防止循环引用
    const seen = new WeakSet();
    if (Array.isArray(data) && data.length === 0) {
        return false;
    }
    if (typeof data === "object" && data !== null && Object.keys(data).length === 0) {
        return false;
    }
    const checkEmpty = checkEmptyFn || defaultCheckEmpty;
    seen.add(data);
    const resultKeys = [];
    function traverse(obj, currentKey, depth) {
        if (depth > maxDepth)
            return;
        // 防止其他类型递归
        typeof obj === 'object' && Object.entries(obj).forEach(([key, value]) => {
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
