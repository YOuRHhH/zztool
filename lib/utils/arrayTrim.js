import { defaultCheckEmpty } from "./public";
/**
 * 数组去空
 * @param data 数组
 * @see {@link https://yourhhh.github.io/zztoolDocument/#arrayTrim} API 文档
 * @example
 * // 调用示例
 * // 0，false不会为清空
 * // null，undefined，''，[]，{}，,,会被清空
 * const arr = [null,{},[],0,false,'',,{abc:123}];
 * arrayTrim(arr); // [0,false,{abc:123}]
 */
export function arrayTrim(data) {
    if (!Array.isArray(data))
        return data;
    return data.filter((item) => {
        return !defaultCheckEmpty(item);
    });
}
