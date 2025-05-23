import { getDateType } from "./getDateType";
import { getDateInfo } from "./getDateInfo";
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
export function getRecentDate(
  date: Date | string | number = new Date(),
  step = 1,
  type: "before" | "after" = "before",
  format: string = "Y-M-D",
  option:Record<number,number> = { 1: 3, 2: 7, 3: 15, 4: 30 }
) {
  const oneDay = 86_400_000;
  let now = new Date(date).getTime();
  if (isNaN(now)) return [];
  
  const stepDays = option[step] * oneDay;
  now = type === "before" ? now - oneDay : now + oneDay;
  const endDate = type === "before" ? (now) - stepDays : now + stepDays;

  const dateArr:string[] = [];

  while ((type === 'before' && now > endDate) || (type === 'after' && now < endDate)) {
    dateArr.push(getDateType(getDateInfo(now), format));
    now += type === "before" ? -oneDay : oneDay;
  }
  return type === "before" ? dateArr.reverse() : dateArr;
}
