/**
 * 获取时间戳
 * @param {*} date
 * @param {*} mill 是否返回毫秒级时间戳
 * @returns
 */
export function getTimeStamp(date = new Date(), mill = true) {
    const timestamp = new Date(date).getTime();
    return isNaN(timestamp) ? NaN : mill ? timestamp : Math.floor(timestamp / 1000);
}
