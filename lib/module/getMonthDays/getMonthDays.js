/**
 * 获取月份天数
 * @param {*} date
 * @returns
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getMonthDays() // 获取当前月份天数
 */
export function getMonthDays(year = new Date().getFullYear(), month = new Date().getMonth() + 1) {
    if (!Number.isInteger(year) || !Number.isInteger(month) || month < 1 || month > 12) {
        throw new Error("Invalid date.");
    }
    return new Date(year, month, 0).getDate();
}
