import {getDate} from "../getDate/getDate";
import {getTimeStamp} from "../getTimeStamp/getTimeStamp";
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
export function getBetweenDate(
  date: string,
  date1: string,
  days: true
): number;
export function getBetweenDate(
  date: string,
  date1: string,
  days?: false
): string[];
export function getBetweenDate(date: String, date1: String, days: boolean = false): string[] | number {
  const oneDay = 86400000;
  const dateTime:any = getTimeStamp(date);
  const dateTime1:any = getTimeStamp(date1);
  if (isNaN(dateTime) || isNaN(dateTime1)) return [];
  
  const diffDays = Math.abs(dateTime - dateTime1) / oneDay + 1;
  if (days) return diffDays;
  if (dateTime === dateTime1)
    return [getDate(new Date(dateTime), "Y-M-D")];
  return Array.from({ length: diffDays }, (_, i) => {
    const time = dateTime > dateTime1 ? dateTime1 + i * oneDay : dateTime + i * oneDay;
    return getDate(new Date(time), "Y-M-D");
  });
}