/**
 * 获取本月有几周
 * @returns
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * weekInMonthCount(); // 获取本月有几周
 */
export function weekInMonthCount() {
  //设置时间为本月的1号
  let date = new Date(new Date().setDate(1) || new Date().setDate(1));
  let firstWeekDate;
  if (date.getDay() === 0) {
    firstWeekDate = 6;
  } else {
    firstWeekDate = date.getDay() - 1;
  }
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  let monthHasDays = date.getDate() + firstWeekDate;
  return Math.ceil(monthHasDays / 7);
}