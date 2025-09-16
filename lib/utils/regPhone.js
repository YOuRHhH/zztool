/**
 * 判断是否为手机号
 * @param str 字符串
 * @returns 是否为手机号
 * @see {@link https://yourhhh.github.io/zztoolDocumentl#regPhone} API 文档
 * @example
 * // 调用示例
 * regPhone('13812345678'); // true
 */
export function regPhone(str) {
    return typeof str === 'string' && /^1[3456789]\d{9}$/.test(str);
}
