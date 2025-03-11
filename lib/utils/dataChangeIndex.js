import { toArray } from "./toArray";
/**
 * 修改对象中的下标
 * index和newIndex必须是字符串，多个下标用逗号分隔
 * @param {*} data
 * @param {*} index
 * @param {*} newIndex
 * @returns {object}
 */
export function dataChangeIndex(data, index, newIndex) {
    if (typeof data !== "object" || !data || !index || !newIndex) {
        throw new Error("Invalid input data or index or newIndex.");
    }
    const indexArr = toArray(index, ",");
    const newIndexArr = toArray(newIndex, ",");
    if (indexArr.length !== newIndexArr.length) {
        throw new Error("下表必须和新下标长度一致");
    }
    const newData = JSON.parse(JSON.stringify(data));
    indexArr.forEach((_, i) => {
        hfn(newData, indexArr[i], newIndexArr[i]);
    });
    function hfn(obj, oldKey, newKey) {
        if (typeof obj !== "object" || obj === null)
            return;
        Object.keys(obj).forEach((key) => {
            if (key === oldKey) {
                // 检查新键是否已经存在
                if (obj.hasOwnProperty(newKey)) {
                    throw new Error(`Key "${newKey}" already exists, cannot rename "${oldKey}"`);
                }
                obj[newKey] = obj[key];
                delete obj[oldKey];
            }
            // 递归处理子对象
            if (typeof obj[key] === "object") {
                hfn(obj[key], oldKey, newKey);
            }
            // 处理数组中的对象
            if (Array.isArray(obj[key])) {
                obj[key] = obj[key].map((item) => typeof item === "object" ? hfn(item, oldKey, newKey) : item);
            }
        });
    }
    return newData;
}
