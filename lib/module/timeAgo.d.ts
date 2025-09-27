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
export declare function timeAgo(timestamp: number, option?: Options): string;
export {};
