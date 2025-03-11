/**
 * 获取时间戳
 * @param {*} date
 * @param {*} mill 是否返回毫秒级时间戳
 * @returns
 */
export function getTimeStamp(date: any = new Date(), mill: boolean = true): number {
  const timestamp = new Date(date).getTime();
  return isNaN(timestamp) ? 0 : mill ? timestamp : Math.floor(timestamp / 1000);
}
