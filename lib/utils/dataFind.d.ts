/**
 * 根据某个字段查找对象或数组中匹配的项（返回第一个匹配项）
 * @param {*} data 要搜索的数据（对象或数组）
 * @param {*} key  要匹配的字段
 * @param {*} value  目标值
 * @returns {*} 匹配项，如果未找到则返回 null
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * dataFind({ a: 1, b: { c: 2 , d: 3} }, 'c', 2); // { c: 2, d: 3 }
 */
export declare function dataFind(data: any, key: any, value: any): any;
