import _now from "../utils/now";
/**
 * 节流
 * @param callback 回调函数
 * @param wait 等待时间
 * @note 请在函数内使用，不然会失效
 * @example
 * // 调用示例
 * const is = () => {
 *   throttle(() => {
 *      console.log("throttle");
 *   },1000)
 * }
 */
export const throttle = (function () {
  let last = 0;
  return (callback:Function, wait = 800) => {
      let now = _now;
      if (now - last > wait) {
          callback();
          last = now;
      }
  };
})();
