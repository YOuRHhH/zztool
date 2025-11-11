/**
 * 数据分组
 * @param {*} data
 * @param {*} key
 * @returns {*}
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @experimental 此方法为实验功能，未来可能调整 API 或返回结构
 * @example
 * // 调用示例
 * const users = [
 *   { id: 1, city: "Beijing" },
 *   { id: 2, city: "Shanghai" },
 *   { id: 3, city: "Beijing" },
 * ];
 *
 * groupBy(users, "city");
 * // {
 * //   Beijing: [{ id: 1, city: "Beijing" }, { id: 3, city: "Beijing" }],
 * //   Shanghai: [{ id: 2, city: "Shanghai" }]
 * // }
 */
export function groupBy(data, key) {
    if (!Array.isArray(data) || !key)
        return {};
    return data.reduce((acc, item) => {
        var _a;
        const groupKey = String((_a = item[key]) !== null && _a !== void 0 ? _a : "others");
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
    }, {});
}
