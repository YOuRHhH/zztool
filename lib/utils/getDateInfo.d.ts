/**
 * 获取日期信息
 * @param str 日期字符串或 Date 对象，可为空
 * @returns {year,month,day,hour,minute,second}
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getDateInfo("2023-01-01") // {year: '2023', month: '01', day: '01', hour: '00', minute: '00', second: '00'}
 */
export declare function getDateInfo(str: string | Date | number): {
    year: any;
    month: any;
    day: any;
    hour: any;
    minute: any;
    second: any;
};
