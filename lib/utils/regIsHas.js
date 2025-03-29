/**
 * 判断是否包含某字符
 * @param str 字符串
 * @param char 字符
 * @returns 是否包含
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * regIsHas('hello world', 'o'); // true
 */
export function regIsHas(str, char) {
    if (!str || !char)
        return false;
    // 处理正则特殊字符，确保 `char` 作为纯文本匹配
    const escapedChar = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(escapedChar).test(str);
}
