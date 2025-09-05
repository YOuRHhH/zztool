/**
 * 防抖
 * @param callback 回调函数
 * @param wait 等待时间
 * @note 请在函数内使用，不然会失效
 * @example
 * // 调用示例
 * const is = () => {
 *   debounce(() => {
 *      console.log("debounce");
 *   },1000)
 * }
 */
export const debounce = (function () {
  let timer: any = null;
  return (callback: Function, wait = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();