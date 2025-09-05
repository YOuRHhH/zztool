/**
 * 获取对应索引的value
 * @param obj 对象
 * @param index 索引
 * @param parentKey 父级key
 * @returns
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @deprecated 此方法与多个函数部分功能雷同，请使用 {@link getValue} 替代，本方法即将废弃，3.0 版本将移除此方法。
 * @note 此方法与多个函数部分功能雷同，请使用 {@link getValue} 替代，本方法即将废弃，3.0 版本将移除此方法。
 * @example
 * // 调用示例
 * getSameIndexValue({ a: { b: { c: 1 } } }, "c") // [{ key: "a.b.c", value: 1 }]
 */
export declare function getSameIndexValue(obj: any, index: string, parentKey?: string): Array<{
    key: string;
    value: any;
}>;
