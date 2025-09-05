/**
 * 获取两个日期之间的日期
 * @param {*} date
 * @param {*} date1
 * @param {*} days
 * @returns {Array}
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @since v2.0.73
 * @example
 * // 调用示例
 * getBetweenDate('2020-01-01', '2020-01-03') // ['2020-01-01', '2020-01-02', '2020-01-03']
 * getBetweenDate('2023-01-01', '2023-01-03', true) // 3
 */
export declare function getBetweenDate(date: string, date1: string, days: true): number;
export declare function getBetweenDate(date: string, date1: string, days?: false): string[];
