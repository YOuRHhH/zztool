/**
 * 获取对应索引的value
 * @param obj 对象
 * @param index 索引
 * @param parentKey 父级key
 * @returns
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getSameIndexValue({ a: { b: { c: 1 } } }, "a.b.c") // [{ key: "a.b.c", value: 1 }]
 */
export declare function getSameIndexValue(obj: any, index: string, parentKey?: string): Array<{
    key: string;
    value: any;
}>;
