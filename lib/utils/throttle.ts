/**
 * 节流
 * @param callback 回调函数
 * @param wait 等待时间
 */
export const throttle = (function () {
  let last = 0;
  return (callback:Function, wait = 800) => {
      let now = +new Date();
      if (now - last > wait) {
          callback();
          last = now;
      }
  };
})();
