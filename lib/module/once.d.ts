/**
 * 函数只执行一次
 * @param fn
 * @see {@link https://yourhhh.github.io/zztoolDocument/#once} API 文档
 * @example
 * const fn = () => {console.log(1)};
 * const times = once(fn);
 */
export declare function once<T extends (...args: any[]) => any>(fn: T): T;
