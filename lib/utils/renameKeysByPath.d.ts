/**
 * 修改对象中的下标
 * index和newIndex必须是字符串，多个下标用逗号分隔
 * @param {*} data
 * @param {*} index
 * @param {*} newIndex
 * @returns {object}
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * renameKeysByPath({ a: { b: { c: 1 },c:1 } }, "a.c,a.b.c", "a.xxx,a.b.xxx") // { a: { b: { xxx: 1 }, xxx:1 } }
 */
export declare function renameKeysByPath<T extends object>(data: T, index: any, newIndex: any): T;
