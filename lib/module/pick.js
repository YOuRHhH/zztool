/**
 * 获取对应索引的value
 * @param obj 对象
 * @param index 索引
 * @param parentKey 父级key
 * @returns
 * @see {@link https://yourhhh.github.io/zztoolDocument/#pick} API 文档
 * @example
 * // 调用示例
 * pick({ a: { b: { c: 1 } } }, "c") // [{ key: "a.b.c", value: 1 }]
 */
export function pick(obj, index, parentKey = "") {
    if (typeof obj !== "object" || obj === null)
        throw new Error("obj must be an object and not null");
    if (typeof index !== "string")
        throw new Error("index must be string");
    if (typeof parentKey !== "string")
        throw new Error("parentKey must be string");
    const arr = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const fullKey = parentKey ? `${parentKey}.${key}` : key;
            const value = obj[key];
            // 递归处理非 null 的对象类型
            if (typeof value === "object" && value !== null) {
                // 添加 null 检查
                arr.push(...pick(value, index, fullKey));
            }
            // 收集匹配键的值（严格相等检查）
            if (key === index) {
                // 改为独立 if 语句，允许同时处理值和子对象
                arr.push({
                    key: fullKey,
                    value,
                });
            }
        }
    }
    return arr;
}
