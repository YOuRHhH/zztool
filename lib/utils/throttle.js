/**
 * 节流
 * @param callback 回调函数
 * @param wait 等待时间
 */
export const throttle = (function () {
    let last = 0;
    console.log(last);
    return (callback, wait = 800) => {
        let now = +new Date();
        console.log(now, last, now - last, wait);
        if (now - last > wait) {
            callback();
            last = now;
        }
    };
})();
