interface TimeUnits {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;
}
interface Options {
  open:boolean,
  cb:(e:TimeUnits) => string
}
/**
 * 多久以前
 * @param {number} timestamp 时间戳
 * @param {Options} option 配置项
 * @param {boolean} option.open 是否开启自定义回调
 * @see {@link https://yourhhh.github.io/zztoolDocument/#timeAgo} API 文档
 * @returns 时间
 * @example
 * const time = timeAgo(1758013775599,{
 *  open:true,
 *  cb:({minutes}) => {
 *    const str = `${minutes}分钟前`
 *    return str
 *  }
 * });
 * console.log(time)
 */
export function timeAgo(timestamp:number,option?:Options){
  const diff = +Date.now() - timestamp,
   seconds = Math.floor(diff / 1000),
   minutes = Math.floor(seconds / 60),
   hours = Math.floor(minutes / 60),
   days = Math.floor(hours / 24),
   months = Math.floor(days / 30),
   years = Math.floor(days / 365);

  if(!option?.open){
    if (seconds < 60) return "刚刚";
    if (minutes < 60) return `${minutes} 分钟前`;
    if (hours < 24) return `${hours} 小时前`;
    if (days < 30) return `${days} 天前`;
    if (months < 12) return `${months} 个月前`;
    return `${years} 年前`;
  }else{
    return option?.cb({seconds,minutes,hours,days,months,years})
  }
}