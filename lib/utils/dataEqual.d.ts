/**
 * 深度比较两个对象或数组，返回是否相等或不一致的 key
 * @param {Object|Array} obj1 - 第一个对象/数组
 * @param {Object|Array} obj2 - 第二个对象/数组
 * @param {Object} options - 配置项
 * @param {boolean} options.returnKeys - 是否返回不一致的 key（默认 false）
 * @param {boolean} options.arrayDiff - 是否检查数组内差异（默认 true）
 * @returns {boolean | string[]} - 相等返回 false，不相等返回 true 或不同 key
 */
export declare function dataEqual(obj1: any, obj2: any, options?: {}): boolean | Array<string>;
