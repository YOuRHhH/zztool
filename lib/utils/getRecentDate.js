import { getDateType } from "./getDateType";
import { getDateInfo } from "./getDateInfo";
export function getRecentDate({ date = new Date(), step = 1, type = "before", format = "Y-M-D", option = { 1: 3, 2: 7, 3: 15, 4: 30 } }) {
    const oneDay = 86400000;
    let now = new Date(date).getTime();
    if (isNaN(now))
        return [];
    /**
     * TODO:需要增加stepDays获取值的判断 option没有step对应的下标是否应该抛错？现在是返回空数组。  现在不想写了，想写了再写 2025-09-17
     */
    const stepDays = option[step] * oneDay;
    now = type === "before" ? now - oneDay : now + oneDay;
    const endDate = type === "before" ? (now) - stepDays : now + stepDays;
    const dateArr = [];
    while ((type === 'before' && now > endDate) || (type === 'after' && now < endDate)) {
        dateArr.push(getDateType(getDateInfo(now), format));
        now += type === "before" ? -oneDay : oneDay;
    }
    return type === "before" ? dateArr.reverse() : dateArr;
}
