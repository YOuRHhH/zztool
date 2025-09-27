import { getDateInfo } from "./getDateInfo";
/**
 * 获取日期类型
 * @param date
 * @param type
 * @returns
 */
export function getDateType(date, type = "Y/M/D h:m:s") {
    const { year, month, day, hour, minute, second } = typeof date === "object" ? date : getDateInfo(date) || {};
    return type
        .replace("Y", year !== null && year !== void 0 ? year : "--")
        .replace("M", month !== null && month !== void 0 ? month : "--")
        .replace("D", day !== null && day !== void 0 ? day : "--")
        .replace("h", hour !== null && hour !== void 0 ? hour : "--")
        .replace("m", minute !== null && minute !== void 0 ? minute : "--")
        .replace("s", second !== null && second !== void 0 ? second : "--");
}
