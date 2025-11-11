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
 * deepRenameKey({ a: { b: { c: 1 },c:1,d:2 } }, "c,d", "xxx,love") // { a: { b: { xxx: 1 },xxx:1,love:2 } }
 */
export declare function deepRenameKey<T extends Record<string, any>>(data: T, index: string, newIndex: string): T;
