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
 * dataChangeIndex({ a: { b: { c: 1 } } }, "a.b.c", "a.b.d") // { a: { b: { d: 1 } } }
 */
export declare function dataChangeIndex(data: any, index: any, newIndex: any): any;
