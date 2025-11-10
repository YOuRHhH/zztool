interface isYesterdayType {
    (date: string | Date | number): boolean;
}
/**
 * 判断是否是昨天
 * @param date
 * @param options
 * @returns {boolean}
 */
export declare const isYesterday: isYesterdayType;
export {};
