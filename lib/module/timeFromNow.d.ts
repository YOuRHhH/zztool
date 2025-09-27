interface TimeUnits {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    months: number;
    years: number;
}
interface Options {
    open: boolean;
    cb: (e: TimeUnits) => string;
}
/**
 * 距离未来还有多久
 * @param timestamp 时间戳
 * @param {Options} option 配置项
 * @param {boolean} option.open 是否开启自定义回调
 * @see {@link https://yourhhh.github.io/zztoolDocument/#timeFromNow} API 文档
 * @returns {string}
 * const time = timeFromNow(2758013775599,{
 *  open:true,
 *  cb:({minutes}) => {
 *    const str = `${minutes}分钟后`
 *    return str
 *  }
 * });
 * console.log(time)
 */
export declare function timeFromNow(timestamp: number, option?: Options): string;
export {};
