/**
 * 获取最后一个字符
 * @param str 字符串
 * @returns 最后一个字符
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getLastChar('yourhhh') // 'h'
 */
export function getLastChar(str) {
    if (typeof str !== 'string' || !str || str.length === 0)
        return '';
    return str.substring(str.length - 1, str.length);
}
