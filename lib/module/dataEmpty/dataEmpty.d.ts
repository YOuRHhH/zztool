/**
 * 判断对象中是否有空值
 * @param {Object} obj - 需要检查的对象
 * @param {boolean} returnKeys - 是否返回空值的路径（默认不返回 true/false）
 * @param {string} parentKey - 父级 key（用于递归拼接路径）
 * @param {WeakSet} seen - 用于防止循环引用
 * @returns {boolean | string[]} - 存在空值返回 `true`，否则返回 `false`，或返回所有空值路径
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @deprecated 请使用 {@link dataAllEmpty} 代替，本方法即将废弃，3.0 版本将移除此方法。
 * @note
 * - `NaN` 不算空值。
 * - `0` 被视为空值。
 * @example
 * // 调用示例
 * dataEmpty({ a: 1, b: { c: 2, d: null } }); // false
 * dataEmpty({ a: 1, b: { c: 2, d: null } }, true); // ["b.d"]
 */
export declare function dataEmpty(obj: any, returnKeys?: boolean, parentKey?: string, seen?: WeakSet<object>): Array<string> | boolean;
