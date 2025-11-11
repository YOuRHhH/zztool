interface isTodayType {
    (date: string | Date | number): boolean;
}
/**
 * 判断是否是今天
 * @param date
 * @param options
 * @returns {boolean}
 * @version 2.6.0
 */
export declare const isToday: isTodayType;
export {};
