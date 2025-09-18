import { idCarInfo } from "./public";
/**
 * 判断是否为身份证
 * @param str 字符串
 * @returns 是否为身份证
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * regIdcard('3301031110DF001011234'); // false
 */
export function regIdcard(str) {
    if (!/^\d{17}(\d|X)$/i.test(str))
        return false;
    const provinceCodes = new Set(idCarInfo.code);
    if (!provinceCodes.has(str.substring(0, 2)))
        return false;
    const year = parseInt(str.substring(6, 10), 10);
    const month = parseInt(str.substring(10, 12), 10);
    const day = parseInt(str.substring(12, 14), 10);
    const birthDate = new Date(year, month - 1, day);
    if (birthDate.getFullYear() !== year ||
        birthDate.getMonth() + 1 !== month ||
        birthDate.getDate() !== day) {
        return false;
    }
    const weights = idCarInfo.weights;
    const checkCodes = idCarInfo.checkCodes;
    let sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += Number(str[i]) * weights[i];
    }
    const calculatedCheckCode = checkCodes[sum % 11];
    if (str[17].toUpperCase() !== calculatedCheckCode) {
        return false;
    }
    return true;
}
