/**
 * 数组去重
 * @param data 数组
 * @returns Array
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * uniqueArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
 */
export function uniqueArray(data) {
    if (!Array.isArray(data))
        return data;
    return [...new Set(data)];
}
