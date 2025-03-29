import { getDate } from "./getDate";
import { getTimeStamp } from "./getTimeStamp";
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
 * getBetweenDate('2020-01-01', '2020-01-02') // ['2020-01-01', '2020-01-02']
 */
export function getBetweenDate(date, date1, days = false) {
    const oneDay = 86400000;
    const dateTime = getTimeStamp(date);
    const dateTime1 = getTimeStamp(date1);
    if (isNaN(dateTime) || isNaN(dateTime1))
        return [];
    const diffDays = Math.abs(dateTime - dateTime1) / oneDay;
    if (days)
        return diffDays;
    if (dateTime === dateTime1)
        return [getDate(new Date(dateTime), "Y-M-D")];
    return Array.from({ length: diffDays + 1 }, (_, i) => {
        const time = dateTime > dateTime1 ? dateTime1 + i * oneDay : dateTime + i * oneDay;
        return getDate(new Date(time), "Y-M-D");
    });
}
