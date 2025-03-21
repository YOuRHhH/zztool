/**
 * 判断是否为手机号
 * @param str 字符串
 * @returns 是否为手机号
 */
export function regPhone(str) {
    return typeof str === 'string' && /^1[3456789]\d{9}$/.test(str);
}
