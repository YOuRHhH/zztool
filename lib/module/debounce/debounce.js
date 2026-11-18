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
export function debounce(func, wait = 800, options = {}) {
    var _a;
    let timerId = null;
    let lastArgs;
    let lastThis;
    let result;
    let lastCallTime;
    const leading = !!options.leading;
    const trailing = (_a = options.trailing) !== null && _a !== void 0 ? _a : true;
    /**
     * 核心执行函数
     * @private
     */
    function invokeFunc() {
        const args = lastArgs;
        const thisArg = lastThis;
        lastArgs = lastThis = undefined;
        result = func.apply(thisArg, args);
        return result;
    }
    /**
     * 启动计时器
     * @private
     */
    function startTimer(pendingFunc, wait) {
        return setTimeout(pendingFunc, wait);
    }
    /**
     * 领先沿触发逻辑
     * @private
     */
    function leadingEdge() {
        // 开启定时器
        timerId = startTimer(timerExpired, wait);
        // 如果设置了 leading，立即执行
        return leading ? invokeFunc() : result;
    }
    /**
     * 计算剩余等待时间
     * @private
     */
    function remainingWait(time) {
        const timeSinceLastCall = time - (lastCallTime || 0);
        // 防抖的等待时间只取决于最后一次调用。
        return wait - timeSinceLastCall;
    }
    /**
     * 判断是否应该触发执行
     * @private
     */
    function shouldInvoke(time) {
        const timeSinceLastCall = time - (lastCallTime || 0);
        return (lastCallTime === undefined ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0);
    }
    /**
     * 定时器到期回调
     * @private
     */
    function timerExpired() {
        const time = Date.now();
        if (shouldInvoke(time)) {
            return trailingEdge();
        }
        // 还没到时间（由于多次触发重置了 lastCallTime），重新起跑
        timerId = startTimer(timerExpired, remainingWait(time));
    }
    /**
     * 落后沿触发逻辑
     * @private
     */
    function trailingEdge() {
        timerId = null;
        // 只有当 trailing 为真且确实有未执行的参数时才执行
        if (trailing && lastArgs) {
            return invokeFunc();
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    /**
     * 取消执行：清理定时器和内存引用
     */
    function cancel() {
        if (timerId !== null) {
            clearTimeout(timerId);
        }
        lastArgs = lastCallTime = lastThis = undefined;
        timerId = null;
    }
    /**
     * 立即执行并清空状态
     */
    function flush() {
        return timerId === null ? result : trailingEdge();
    }
    /**
     * 防抖包装后的入口函数
     */
    function debounced(...args) {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);
        lastArgs = args;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === null) {
                return leadingEdge();
            }
        }
        if (timerId === null) {
            timerId = startTimer(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
