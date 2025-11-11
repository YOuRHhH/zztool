/**
 * 重试
 * @param cb
 * @param times
 * @param delay
 */
export declare function retry(cb: Function, times?: number, delay?: number): Promise<unknown>;
