import { getType } from "./getType";
/**
 * 判断对象中是否有空值
 * @param {Object} obj - 需要检查的对象
 * @param {boolean} returnKeys - 是否返回空值的路径（默认返回 true/false）
 * @param {string} parentKey - 父级 key（用于递归拼接路径）
 * @returns {boolean | string[]} - 存在空值返回 `true`，否则返回 `false`，或返回所有空值路径
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * dataEmpty({ a: 1, b: { c: 2, d: null } }); // false
 * dataEmpty({ a: 1, b: { c: 2, d: null } }, true); // ["b.d"]
 */
export function dataEmpty(obj, returnKeys = false, parentKey = "") {
    if (!obj || typeof obj !== "object") {
        throw new Error("Invalid argument: obj must be an object");
    }
    if (Array.isArray(obj) && obj.length == 0) {
        return true;
    }
    if (typeof obj === "object" && Object.keys(obj).length === 0) {
        return true;
    }
    const emptyKeys = [];
    function checkEmpty(value) {
        if (getType(value) == 'number') {
            return isNaN(value); // 只判断 NaN，0 不算空值
        }
        return (value === "" ||
            value === null ||
            value === undefined ||
            (typeof value === "object" &&
                value !== null &&
                (Array.isArray(value)
                    ? value.length === 0
                    : Object.keys(value).length === 0)));
    }
    Object.keys(obj).forEach((key) => {
        const fullKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];
        const isEmpty = checkEmpty(value);
        if (typeof value === "object" && !isEmpty) {
            const nestedResult = dataEmpty(value, true, fullKey);
            if (Array.isArray(nestedResult)) {
                emptyKeys.push(...nestedResult);
            }
        }
        else if (isEmpty) {
            emptyKeys.push(fullKey);
        }
    });
    return returnKeys ? emptyKeys : emptyKeys.length > 0;
}
