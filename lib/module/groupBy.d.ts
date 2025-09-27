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
export declare function groupBy<T extends Record<string, any>>(data: T[], key: keyof T): Record<string, T[]>;
