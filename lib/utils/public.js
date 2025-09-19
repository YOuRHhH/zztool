export const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
export const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
export const idCarInfo = {
    code: [
        "11", "12", "13", "14", "15", "21", "22", "23", "31", "32", "33", "34", "35", "36", "37",
        "41", "42", "43", "44", "45", "46", "50", "51", "52", "53", "54", "61", "62", "63", "64", "65",
        "71", "81", "82", "91"
    ],
    weights: [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    checkCodes: ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"]
};
/**
 * 抛出错误
 * @param msg 错误信息
 */
export function error(msg) {
    throw new Error(msg);
}
/**
 * 判断是否为字符串
 * @param str 字符串
 */
export function isString(str) {
    if (typeof str !== "string") {
        error("参数类型错误，必须为字符串");
    }
}
/**
 * 内部默认空值检测
 * @param value
 * @returns
 */
export function defaultCheckEmpty(value) {
    return (value === "" ||
        value === null ||
        value === undefined || (typeof value === "object" && (Array.isArray(value) ? value.length === 0 : Object.keys(value).length === 0)));
}
