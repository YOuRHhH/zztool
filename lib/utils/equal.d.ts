/**
* 深度比较两个对象或数组，返回是否相等或不一致的 key
* @param {Object|Array} obj1 - 第一个对象/数组
* @param {Object|Array} obj2 - 第二个对象/数组
* @param {Object} options - 配置项
* @param {boolean} options.returnKeys - 是否返回不一致的 key（默认 false）
* @param {boolean} options.arrayDiff - 是否检查数组内差异（默认 true）
* @returns {boolean | string[]} - 相等返回 false，不相等返回 true 或不同 key
*
* @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
* @example
* ```javascript
* // 调用示例
* const obj1 = { a: 1, b: { c: 2 } };
* const obj2 = { a: 1, b: { c: 3 } };
* console.log(equal(obj1, obj2, { returnKeys: true })); // ['b.c']
* ```
*/
export declare function equal(obj1: any, obj2: any, options: {
    returnKeys: true;
    arrayDiff?: boolean;
}): string[];
export declare function equal(obj1: any, obj2: any, options?: {
    returnKeys?: false;
    arrayDiff?: boolean;
}): boolean;
