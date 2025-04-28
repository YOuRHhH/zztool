import { getType } from "./getType";
/**
 * 数据全部为空
 * @param {Object} data - 需要检查的对象
 * @param options
 * @param {boolean} options.returnKeys - 是否返回空值的路径（默认返回 true/false）
 * @param {string} options.parentKey - 父级路径（默认为空字符串）
 * @param {Function} options.checkEmptyFn - 自定义判断是否为空的函数（默认使用内置函数）
 * @param {Array<string>} options.ignoreKeys - 忽略的键名（默认为空数组）
 * @param {number} options.maxDepth - 最大递归深度（默认无限制）
 * @returns {Array<string> | boolean} - 全部为空时返回 `false`，否则返回 `true`
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @throws {Error} - 当传入数据不是对象或数组时抛出
 * @note
 * - false = 全部为空
 * - `NaN` 不算空值。
 * - `0` 被视为空值。
 * @example
 * // 调用示例
 * const obj = { a: '', b: 123 };
 * dataAllEmpty(obj, false); // true
 * dataAllEmpty(obj, true);  // ['b']
 */
export function dataAllEmpty(data, options = {}) {
    const { returnKeys = false, parentKey = '', checkEmptyFn, ignoreKeys = [], maxDepth = Infinity, } = options;
    // 防止循环引用
    const seen = new WeakSet();
    if (Array.isArray(data) && data.length === 0) {
        return true;
    }
    if (typeof data === "object" && data !== null && Object.keys(data).length === 0) {
        return true;
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
            if (isNotEmpty && typeof value === "object" && value !== null) {
                if (!seen.has(value)) {
                    traverse(value, fullKey, depth + 1);
                }
            }
            else if (isNotEmpty) {
                resultKeys.push(fullKey);
            }
        });
    }
    traverse(data, parentKey, 1);
    return returnKeys ? resultKeys : resultKeys.length > 0;
}
