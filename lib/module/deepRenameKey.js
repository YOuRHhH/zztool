/**
 * 修改对象中的下标
 * @param {*} data
 * @param {*} index
 * @param {*} newIndex
 * @returns {object}
 * @see {@link https://yourhhh.github.io/zztoolDocument/#deepRenameKey} API 文档
 * @warning 请确保传入的形参合法也length一致
 * @example
 * // 调用示例
 * deepRenameKey({ a: { b: { c: 1 },c:1,d:2 } }, "c,d", "xxx,love") // { a: { b: { xxx: 1 },xxx:1 } }
 */
export function deepRenameKey(data, index, newIndex) {
    if (typeof data !== "object" ||
        isEmptyObject(data) ||
        !data ||
        !index ||
        !newIndex) {
        throw new Error("Invalid input param.");
    }
    const newData = JSON.parse(JSON.stringify(data));
    const indexArr = index.split(",");
    const newIndexArr = newIndex.split(",");
    if (indexArr.length !== newIndexArr.length) {
        throw new Error("The number of index and newIndex is not equal.");
    }
    // 索引映射表
    const renameMap = new Map();
    for (let i = 0; i < indexArr.length; i++) {
        renameMap.set(indexArr[i].trim(), newIndexArr[i].trim());
    }
    function changeKey(obj) {
        var _a;
        if (obj === null || typeof obj !== "object")
            return obj;
        if (Array.isArray(obj)) {
            return obj.map(changeKey);
        }
        const result = {};
        for (const [key, value] of Object.entries(obj)) {
            const newKey = (_a = renameMap.get(key)) !== null && _a !== void 0 ? _a : key;
            result[newKey] = changeKey(value);
        }
        return result;
    }
    return changeKey(newData);
}
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
