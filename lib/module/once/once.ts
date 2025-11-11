/**
 * 函数只执行一次
 * @param fn
 * @see {@link https://yourhhh.github.io/zztoolDocument/#once} API 文档
 * @example
 * const fn = () => {console.log(1)};
 * const times = once(fn);
 */
export function once<T extends (...args: any[]) => any>(fn: T): T {
  let isRun = false;
  let result: ReturnType<T>;
  return function (this:any,...args: Parameters<T>): ReturnType<T> {
    if (!isRun) {
      isRun = true;
      result = fn.apply(this, args);
    }
    return result;
  } as T;
}