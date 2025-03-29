/**
 * 金额格式化
 * @param money 金额
 * @param char 分隔符
 * @param first 首字符
 * @returns string
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * moneyFormat(123456789) // 123,456,789
 * moneyFormat(123456789, "~", "￥") // ￥123~456~789
 */
export declare function moneyFormat(money: string | number, char?: string, first?: string): string;
