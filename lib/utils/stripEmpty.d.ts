/**
 * 移出对象中的空属性
 * @param {*} obj
 * @returns
 * @example
 * // 调用示例
 * stripEmpty({ a: 1, d:'',z:{a:1,b:'',xx:{},zz:[]}}) // {a:1,z:{a:1}
 */
export declare function stripEmpty(obj: any): any;
