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
export function timeFromNow(timestamp, option) {
    const now = Date.now();
    // if(timestamp <= now) throw new Error('timestamp 必须大于现在的时间');
    const diff = timestamp - now;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    if (!(option === null || option === void 0 ? void 0 : option.open)) {
        if (seconds < 0)
            return `已过期`;
        if (seconds < 60)
            return `刚刚`;
        if (minutes < 60)
            return `${minutes} 分钟后`;
        if (hours < 24)
            return `${hours} 小时后`;
        if (days < 30)
            return `${days} 天后`;
        if (months < 12)
            return `${months} 个月后`;
        return `${years} 年后`;
    }
    else {
        // 开发者可自定义
        return option === null || option === void 0 ? void 0 : option.cb({ seconds, minutes, hours, days, months, years });
    }
}
