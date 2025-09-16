/**
 * 获取某日期的近期天数
 * @param {Date | string | number} date 日期
 * @param {1 | 2 | 3 | 4} step 步长 1=3 2=7 3=15 4=30
 * @param {"before" | "after"} type before | after
 * @param {string} format 格式化格式，默认 "Y-M-D"
 * @param {Record<number,number>} option 步长对应天数
 * @returns {string[]} 日期数组
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getRecentDate(new Date(), 1, "before", "Y-M-D", { 1: 3, 2: 7, 3: 15, 4: 30 });
 */
interface RecentDate {
    date?: Date | string | number;
    step?: number;
    type?: "before" | "after";
    format?: string;
    option?: Record<number, number>;
}
export declare function getRecentDate({ date, step, type, format, option }: RecentDate): string[];
export {};
