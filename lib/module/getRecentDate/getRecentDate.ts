import { getDateType } from "../getDateType/getDateType";
import { getDateInfo } from "../getDateInfo/getDateInfo";
interface RecentDate {
  date?: Date | string | number;
  step?: number;
  type?: "before" | "after";
  format?: string;
  option?: Record<number, number>;
}
/**
 * 获取某日期的近期天数
 * @param {Date | string | number} options.date 日期
 * @param {1 | 2 | 3 | 4} options.step 步长 1=3 2=7 3=15 4=30
 * @param {"before" | "after"} options.type before | after
 * @param {string} options.format 格式化格式，默认 "Y-M-D"
 * @param {Record<number,number>} options.option 步长对应天数
 * @returns {string[]} 日期数组
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getRecentDate({
 *  date: new Date(),
 *  step: 4,
 *  type:'after',
 *  option: { 1: 3, 2: 7, 3: 15, 4: 300 }
 * })
 */

export function getRecentDate(options: RecentDate): string[] {
  let {date = new Date(),step=1,type='after',format='Y-M-D',option={ 1: 3, 2: 7, 3: 15, 4: 30 }}:RecentDate = options;
  const oneDay = 86_400_000;
  let now = new Date(date).getTime();
  if (isNaN(now)) return [];
  const optionKeys = Object.keys(option);
  if (optionKeys.includes(step.toString()) === false) step = Number(optionKeys[0]);
  
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
