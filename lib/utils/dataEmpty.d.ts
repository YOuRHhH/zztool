/**
 * 判断对象中是否有空值
 * @param {Object} obj - 需要检查的对象
 * @param {boolean} returnKeys - 是否返回空值的路径（默认返回 true/false）
 * @param {string} parentKey - 父级 key（用于递归拼接路径）
 * @returns {boolean | string[]} - 存在空值返回 `true`，否则返回 `false`，或返回所有空值路径
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * dataEmpty({ a: 1, b: { c: 2, d: null } }); // false
 * dataEmpty({ a: 1, b: { c: 2, d: null } }, true); // ["b.d"]
 */
export declare function dataEmpty(obj: any, returnKeys?: boolean, parentKey?: string): Array<string> | boolean;
