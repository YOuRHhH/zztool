/**
 * 获取时间段
 * @param {*} start 开始时间
 * @param {*} end 结束时间
 * @param {*} step 步长
 * @param {*} type hh:mm:ss hh:mm
 * @returns 时间段
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getTimeStep('08:00', '10:00', '01:00', 'hh:mm'); // ["08:00", "09:00", "10:00"]
 * getTimeStep('08:00', '10:00', '01:00', 'hh:mm:ss'); // ["08:00:00", "09:00:00", "10:00:00"]
 */
export declare function getTimeStep(start: string, end: string, step?: any, type?: any): string[];
