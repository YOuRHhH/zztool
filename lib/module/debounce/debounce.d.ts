/**
 * 防抖配置选项
 */
interface DebounceOptions {
    /** 是否在延迟开始前立即调用函数 */
    leading?: boolean;
    /** 是否在延迟结束后执行（默认为 true） */
    trailing?: boolean;
}
/**
 * 创建一个防抖函数，将触发频率较高的函数调用合并为最后一次执行。
 *
 * @param func 要进行防抖处理的目标函数
 * @param wait 需要延迟的毫秒数。默认值：800
 * @param options 配置对象
 * @param options.leading 是否在延迟开始前调用。默认值：false
 * @param options.trailing 是否在延迟结束后调用。默认值：true
 * @returns 返回经过包装的防抖函数，包含 `cancel` 和 `flush` 方法
 *
 * @see {@link https://lodash.com/docs/4.17.15#debounce} 参考 Lodash 标准实现
 * @see {@link https://yourhhh.github.io/zztoolDocument/example/utils/debounce/} 详细使用示例
 * @example
 * // 示例：处理窗口缩放
 * const handleResize = debounce((e: Event) => console.log('Resized', e), 300);
 * window.addEventListener('resize', handleResize);
 * // 销毁时调用
 * // handleResize.cancel();
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait?: number, options?: DebounceOptions): {
    (this: any, ...args: Parameters<T>): ReturnType<T> | void;
    cancel: () => void;
    flush: () => ReturnType<T> | undefined;
};
export {};
