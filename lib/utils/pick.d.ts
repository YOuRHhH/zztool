/**
 * 获取对应索引的value
 * @param obj 对象
 * @param index 索引
 * @param parentKey 父级key
 * @returns
 * @see {@link https://yourhhh.github.io/zztoolDocument/#pick} API 文档
 * @example
 * // 调用示例
 * pick({ a: { b: { c: 1 } } }, "c") // [{ key: "a.b.c", value: 1 }]
 */
export declare function pick(obj: any, index: string, parentKey?: string): Array<{
    key: string;
    value: any;
}>;
