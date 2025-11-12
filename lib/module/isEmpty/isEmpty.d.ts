interface IsEmptyOptions {
    returnKeys?: boolean;
    parentKey?: string;
    checkEmptyFn?: (value: any) => boolean;
    ignoreKeys?: string[];
    maxDepth?: number;
}
/**
 * 数据全部为空
 * @param {Object} data - 需要检查的对象
 * @param options
 * @param {boolean} options.returnKeys - 是否返回空值的路径（默认返回 true/false）
 * @param {string} options.parentKey - 父级路径（默认为空字符串）
 * @param {Function} options.checkEmptyFn - 自定义判断是否为空的函数（默认使用内置函数）
 * @param {Array<string>} options.ignoreKeys - 忽略的键名（默认为空数组）
 * @param {number} options.maxDepth - 最大递归深度（默认无限制）
 * @returns {Array<string> | boolean} - 有空值返回 `true`，否则返回 `false`
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @throws {Error} - 当传入数据不是对象或数组时抛出
 * @note
 * - 具体请看`defaultCheckEmpty`函数
 * - 核心空值定义（不可覆盖）：`''`、`undefined`、`null`、`{}`、`[]` 永远被视为空值
 * - checkEmptyFn 用于在核心空值基础上扩展额外的空值判断逻辑，
 *
 * - 自定义判断是否为空的函数
 * checkEmptyFn:(val) => {
 *   const type = getType(val);
 *   if(type === 'object' && Object.keys(val).length == 0){
 *     return true;
 *   }else{
 *     return false;
 *   }
 * }
 * @example
 * // 调用示例
 * const obj = { a: 1, b: 2, 3:{} };
 * isEmpty(obj);  // true
 */
export declare function isEmpty<T extends any>(data: T, options?: IsEmptyOptions & {
    returnKeys: true;
}): any[];
export declare function isEmpty<T extends any>(data: T, options?: IsEmptyOptions & {
    returnKeys: false;
}): boolean;
export {};
