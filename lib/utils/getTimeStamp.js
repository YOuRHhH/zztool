/**
 * 获取时间戳
 * @param {*} date
 * @param {boolean} mill 是否返回毫秒级时间戳
 * @returns {number} 时间戳
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getTimeStamp() // 获取当前时间戳
 */
export function getTimeStamp(date = new Date(), mill = true) {
    const timestamp = new Date(date).getTime();
    return isNaN(timestamp) ? NaN : mill ? timestamp : Math.floor(timestamp / 1000);
}
