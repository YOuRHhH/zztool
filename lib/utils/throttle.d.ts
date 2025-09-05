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
export declare const throttle: (callback: Function, wait?: number) => void;
