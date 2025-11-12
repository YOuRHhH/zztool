interface stripEmptyOption {
    filterArray?: boolean;
    checkEmptyFn?: (value: any) => boolean;
}
/**
 * 移出对象中的空属性
 * @param {*} obj 对象
 * @param {Object} option 配置项
 * @param {Boolean} option.filterArray 默认`true` 是否过滤数组中的空项
 * @param {Function} option.checkEmptyFn 默认`defaultCheckEmpty` 是否过滤数组中的空项
 * @note 内部使用 `arrayTrime` 函数过滤数组中的空项
 * @warning
 * - 空数组都会被过滤掉`arr:[]`
 * - `option.filterArray = false`:`arr['']`则不会被过滤
 * @returns {Object}
 * @since 2.4.1
 * @example
 * // 调用示例
 * stripEmpty({ a: 1, d:'',z:{a:1,b:'',xx:{},zz:[]}}) // {a:1,z:{a:1}
 */
export declare function stripEmpty<T extends Record<string, any>>(obj: T, option?: stripEmptyOption, seen?: WeakMap<object, any>): T;
export {};
