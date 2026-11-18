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
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 800,
  options: ThrottleSettings = {}
) {
  let lastArgs: Parameters<T> | undefined;
  let lastThis: any;
  let result: ReturnType<T> | undefined;

  /** 
   * 适配 Node.js (Timeout对象) 和 浏览器 (number) 
   */
  let timerId: ReturnType<typeof setTimeout> | null = null;
  
  let lastCallTime: number = 0;
  let lastInvokeTime: number = 0;

  const leading = options.leading ?? true;
  const trailing = options.trailing ?? true;

  /**
   * 内部调用函数
   * @private
   */
  function invokeFunc(time: number) {
    const args = lastArgs;
    const thisArg = lastThis;

    // 清空引用防止内存泄漏，辅助 GC
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args!);
    return result;
  }

  /**
   * 计算距离下一次执行的剩余时间
   * @private
   */
  function remainingWait(time: number) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    return trailing
      ? Math.min(timeWaiting, wait - timeSinceLastInvoke)
      : timeWaiting;
  }

  /**
   * 判断当前时间点是否允许执行
   * @private
   */
  function shouldInvoke(time: number) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === 0 || 
      timeSinceLastCall >= wait || 
      timeSinceLastCall < 0 || 
      (trailing && timeSinceLastInvoke >= wait)
    );
  }

  /**
   * 计时器回调：决定是执行还是继续等待
   * @private
   */
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // 动态调整定时器唤醒时间，保持极致性能
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  /**
   * 延迟执行后的收尾逻辑
   * @private
   */
  function trailingEdge(time: number) {
    timerId = null;

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  /**
   * 首次触发后的执行逻辑
   * @private
   */
  function leadingEdge(time: number) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }

  /**
   * 取消节流：清除定时器并释放引用。
   * 在 Node.js 长期驻留进程或 React 组件销毁时必调。
   */
  function cancel() {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    // 与首次调用使用相同的时间标记。
    lastCallTime = 0;
    lastArgs = lastThis = undefined;
    timerId = null;
  }

  /**
   * 立即执行挂起的任务
   */
  function flush() {
    return timerId === null ? result : trailingEdge(Date.now());
  }

  /**
   * 节流包装的主体逻辑
   */
  function throttled(this: any, ...args: Parameters<T>): ReturnType<T> | void {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === null) {
        return leadingEdge(lastCallTime);
      }
      if (trailing) {
        if (timerId !== null) clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === null && trailing) {
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    return result;
  }

  throttled.cancel = cancel;
  throttled.flush = flush;

  return throttled;
}
