/**
 * 修改对象中的下标
 * @param {*} data
 * @param {*} index
 * @param {*} newIndex
 * @returns {object}
 * @see {@link https://yourhhh.github.io/zztoolDocument/#deepRenameKey} API 文档
 * @example
 * // 调用示例
 * deepRenameKey({ a: { b: { c: 1 },c:1 } }, "c", "xxx") // { a: { b: { xxx: 1 },xxx:1 } }
 */
export declare function deepRenameKey<T extends object>(data: T, index: any, newIndex: any): T;
