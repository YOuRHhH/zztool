export declare const isNode: boolean;
export declare const isBrowser: boolean;
export declare const idCarInfo: {
    code: string[];
    weights: number[];
    checkCodes: string[];
};
/**
 * 抛出错误
 * @param msg 错误信息
 */
export declare function error(msg: string): void;
/**
 * 判断是否为字符串
 * @param str 字符串
 */
export declare function isString(str: string): void;
/**
 * 内部默认空值检测
 * @param value
 * @returns
 */
export declare function defaultCheckEmpty(value: any): boolean;
