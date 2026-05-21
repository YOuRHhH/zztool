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
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 800,
  options: DebounceOptions = {}
) {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | undefined;
  let lastThis: any;
  let result: ReturnType<T> | undefined;
  let lastCallTime: number | undefined;
  let lastInvokeTime: number = 0;

  const leading = !!options.leading;
  const trailing = options.trailing ?? true;

  /**
   * 核心执行函数
   * @private
   */
  function invokeFunc(time: number) {
    const args = lastArgs;
    const thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args!);
    return result;
  }

  /**
   * 启动计时器
   * @private
   */
  function startTimer(pendingFunc: () => void, wait: number) {
    return setTimeout(pendingFunc, wait);
  }

  /**
   * 领先沿触发逻辑
   * @private
   */
  function leadingEdge(time: number) {
    lastInvokeTime = time;
    // 开启定时器
    timerId = startTimer(timerExpired, wait);
    // 如果设置了 leading，立即执行
    return leading ? invokeFunc(time) : result;
  }

  /**
   * 计算剩余等待时间
   * @private
   */
  function remainingWait(time: number) {
    const timeSinceLastCall = time - (lastCallTime || 0);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    // 如果设置了 maxWait（扩展预留），逻辑会更复杂，这里处理基础防抖
    return timeWaiting;
  }

  /**
   * 判断是否应该触发执行
   * @private
   */
  function shouldInvoke(time: number) {
    const timeSinceLastCall = time - (lastCallTime || 0);

    return (
      lastCallTime === undefined || 
      timeSinceLastCall >= wait || 
      timeSinceLastCall < 0
    );
  }

  /**
   * 定时器到期回调
   * @private
   */
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // 还没到时间（由于多次触发重置了 lastCallTime），重新起跑
    timerId = startTimer(timerExpired, remainingWait(time));
  }

  /**
   * 落后沿触发逻辑
   * @private
   */
  function trailingEdge(time: number) {
    timerId = null;

    // 只有当 trailing 为真且确实有未执行的参数时才执行
    if (trailing && lastArgs) {
      return invokeFunc(time);
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
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = null as any;
  }

  /**
   * 立即执行并清空状态
   */
  function flush() {
    return timerId === null ? result : trailingEdge(Date.now());
  }

  /**
   * 防抖包装后的入口函数
   */
  function debounced(this: any, ...args: Parameters<T>): ReturnType<T> | void {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === null) {
        return leadingEdge(lastCallTime);
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