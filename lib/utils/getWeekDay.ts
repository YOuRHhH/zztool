/**
 * 获取日期是星期几
 * @param {*} date
 * @returns
 */
export function getWeekDay(date: any = new Date()) {
  date = date instanceof Date ? date : new Date(date);
  const weekDays = ["日", "一", "二", "三", "四", "五", "六"];
  return weekDays[new Date(date).getDay()];
}