/**
 * 获取对应索引的value
 * @param obj 对象
 * @param index 索引
 * @param parentKey 父级key
 * @returns
 */
export function getSameIndexValue(obj, index, parentKey = "") {
    if (typeof obj !== "object" || obj === null)
        throw new Error("obj 必须是非 null 对象");
    if (typeof index !== "string")
        throw new Error("index 必须是字符串");
    if (typeof parentKey !== "string")
        throw new Error("parentKey 必须是字符串");
    const arr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const fullKey = parentKey ? `${parentKey}.${key}` : key;
            const value = obj[key];
            if (typeof value === "object") {
                arr.push(...getSameIndexValue(value, index, fullKey));
            }
            else if (key == index) {
                arr.push({
                    key: fullKey,
                    value,
                });
            }
        }
    }
    return arr;
}
