/**
 * 数组去空
 * @param data 数组
 *
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * const arr = [1,2,3,'',null,undefined,,4,5];
 * arrayTrim(arr); // [1,2,3,4,5]
 */
export function arrayTrim(data) {
    if (!Array.isArray(data))
        return data;
    return data.filter((item) => item);
}
