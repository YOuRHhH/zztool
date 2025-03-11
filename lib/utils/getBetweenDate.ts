import {getDate} from "./getDate";
import {getTimeStamp} from "./getTimeStamp";
/**
 * 获取两个日期之间的日期
 * @param {*} date
 * @param {*} date1
 * @param {*} days
 * @returns {Array}
 */
export function getBetweenDate(date: any, date1: any, days: boolean = false): any {
  const oneDay = 86400000;
  const dateTime = getTimeStamp(date);
  const dateTime1 = getTimeStamp(date1);
  if (isNaN(dateTime) || isNaN(dateTime1)) return [];
  
  const diffDays = Math.abs(dateTime - dateTime1) / oneDay;
  if (days) return diffDays;
  
  return Array.from({ length: diffDays }, (_, i) => {
    const time = dateTime > dateTime1 ? dateTime1 + i * oneDay : dateTime + i * oneDay;
    return getDate(new Date(time), "Y-M-D");
  });
}