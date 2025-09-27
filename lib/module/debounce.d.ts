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
export declare const debounce: (callback: Function, wait?: number) => void;
