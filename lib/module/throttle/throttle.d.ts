interface ThrottleSettings {
    /** 是否在延迟开始前调用 */
    leading?: boolean;
    /** 是否在延迟结束后调用 */
    trailing?: boolean;
}
/**
 * 创建一个节流函数，在 wait 毫秒内最多执行一次回调。
 * 兼容 Node.js 与浏览器环境，具备高性能计时器调度与内存清理机制。
 * @param func 要节流的函数
 * @param wait 需要节流的毫秒数。默认值：800
 * @param options 配置对象
 * @param options.leading 是否在延迟开始前调用。默认值：true
 * @param options.trailing 是否在延迟结束后调用。默认值：true
 * @returns 返回节流后的新函数，该函数包含 `cancel` 和 `flush` 方法
 * @see {@link https://lodash.com/docs/4.17.15#throttle} 参考实现逻辑
 * @see {@link https://yourhhh.github.io/zztoolDocument/example/utils/throttle/} 详细使用示例
 * @example
 * // 调用示例
 * const throttled = throttle((val: string) => console.log(val), 1000);
 *
 * // 立即执行并进入 1000ms 冷却期
 * throttled('hello');
 *
 * // 销毁节流器
 * throttled.cancel();
 */
export declare function throttle<T extends (...args: any[]) => any>(func: T, wait?: number, options?: ThrottleSettings): {
    (this: any, ...args: Parameters<T>): ReturnType<T> | void;
    cancel: () => void;
    flush: () => ReturnType<T> | undefined;
};
export {};
