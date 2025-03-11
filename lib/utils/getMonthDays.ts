/**
 * 获取月份天数
 * @param {*} date
 * @returns
 */
export function getMonthDays(year: number = new Date().getFullYear(), month: number = new Date().getMonth() + 1): number {
  if (!Number.isInteger(year) || !Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error("无效的年份或月份");
  }
  return new Date(year, month, 0).getDate();
}