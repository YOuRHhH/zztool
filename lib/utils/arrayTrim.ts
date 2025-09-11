/**
 * 数组去空
 * @param data 数组
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * const arr = [null,{},[],0,false,'',,{abc:123}];
 * arrayTrim(arr); // [{abc:123}]
 */
export function arrayTrim(data: any[]) {
    if (!Array.isArray(data)) return data;
    return data.filter((item) => {
        if (item === null || item === undefined || item === '') return false;
        if (Array.isArray(item) && item.length === 0) return false;
        if (typeof item === 'object' && !Array.isArray(item) && Object.keys(item).length === 0) return false;
        if (item === 0 || item === false) return true;
        return true;
    });
}