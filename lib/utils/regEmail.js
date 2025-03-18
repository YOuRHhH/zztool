/**
 * 判断是否为邮箱
 * @param str 字符串
 * @returns 是否为邮箱
 */
export function regEmail(str) {
    const emailRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
    return emailRegex.test(str);
}
