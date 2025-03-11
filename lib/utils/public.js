export const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
export const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
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
