interface RecentDate {
    date?: Date | string | number;
    step?: number;
    type?: "before" | "after";
    format?: string;
    option?: Record<number, number>;
}
/**
 * 获取某日期的近期天数
 * @param {Date | string | number} options.date 日期
 * @param {1 | 2 | 3 | 4} options.step 步长 1=3 2=7 3=15 4=30
 * @param {"before" | "after"} options.type before | after
 * @param {string} options.format 格式化格式，默认 "Y-M-D"
 * @param {Record<number,number>} options.option 步长对应天数
 * @returns {string[]} 日期数组
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getRecentDate({
 *  date: new Date(),
 *  step: 4,
 *  type:'after',
 *  option: { 1: 3, 2: 7, 3: 15, 4: 300 }
 * })
 */
export declare function getRecentDate(options: RecentDate): string[];
export {};
