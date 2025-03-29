/**
 * 获取日期是星期几
 * @param {*} date
 * @returns 星期几
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用实例
 * getWeekDay(new Date()) // => "星期一"
 */
export function getWeekDay(date = new Date()) {
    date = date instanceof Date ? date : new Date(date);
    const weekDays = ["日", "一", "二", "三", "四", "五", "六"];
    return weekDays[new Date(date).getDay()];
}
