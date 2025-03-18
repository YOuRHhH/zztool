/**
 * 获取时间戳
 * @param {*} date
 * @param {*} mill 是否返回毫秒级时间戳
 * @returns
 */
export function getTimeStamp(date: any = new Date(), mill: boolean = true): number|boolean {
  const timestamp = new Date(date).getTime();
  return isNaN(timestamp) ? NaN : mill ? timestamp : Math.floor(timestamp / 1000);
}
