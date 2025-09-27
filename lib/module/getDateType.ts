import {getDateInfo} from "./getDateInfo";
/**
 * 获取日期类型
 * @param date
 * @param type
 * @returns
 */
export function getDateType(date: any, type = "Y/M/D h:m:s"): string {
  const { year, month, day, hour, minute, second } =
    typeof date === "object" ? date : getDateInfo(date) || {};
  
  return type
    .replace("Y", year ?? "--")
    .replace("M", month ?? "--")
    .replace("D", day ?? "--")
    .replace("h", hour ?? "--")
    .replace("m", minute ?? "--")
    .replace("s", second ?? "--");
}