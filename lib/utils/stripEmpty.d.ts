/**
 * 移出对象中的空属性
 * @param {*} obj 对象
 * @param {Object} option 配置项
 * @param {Boolean} option.filterArray 是否过滤数组中的空项
 * @returns
 * @example
 * // 调用示例
 * stripEmpty({ a: 1, d:'',z:{a:1,b:'',xx:{},zz:[]}}) // {a:1,z:{a:1}
 */
export declare function stripEmpty(obj: any, option?: {
    filterArray: boolean;
}): any;
