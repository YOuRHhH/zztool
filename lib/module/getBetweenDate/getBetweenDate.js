import { getDate } from "../getDate/getDate";
import { getTimeStamp } from "../getTimeStamp/getTimeStamp";
export function getBetweenDate(date, date1, days = false) {
    const oneDay = 86400000;
    const dateTime = getTimeStamp(date);
    const dateTime1 = getTimeStamp(date1);
    if (isNaN(dateTime) || isNaN(dateTime1))
        return [];
    const diffDays = Math.abs(dateTime - dateTime1) / oneDay + 1;
    if (days)
        return diffDays;
    if (dateTime === dateTime1)
        return [getDate(new Date(dateTime), "Y-M-D")];
    return Array.from({ length: diffDays }, (_, i) => {
        const time = dateTime > dateTime1 ? dateTime1 + i * oneDay : dateTime + i * oneDay;
        return getDate(new Date(time), "Y-M-D");
    });
}
