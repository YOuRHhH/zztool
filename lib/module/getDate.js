import { getDateInfo } from "./getDateInfo";
import { getDateType } from "./getDateType";
/**
 * 获取日期
 * 如果只有一个参数，str会被当为type传递
 * @param str
 * @param type
 * @returns
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getDate() // 2023/01/01 xx:xx:xx
 * getDate('Y-M-D') // 2023-01-01
 * getDate('2023/1/1','Y-M-D') // 2023-01-01
 */
export function getDate(str = "", type = "Y/M/D h:m:s") {
    if (arguments.length === 0) {
        return getDateType(getDateInfo(new Date()), "Y/M/D h:m:s");
    }
    if (arguments.length === 1) {
        return getDateType(getDateInfo(new Date()), str);
    }
    return getDateType(getDateInfo(str), type);
}
