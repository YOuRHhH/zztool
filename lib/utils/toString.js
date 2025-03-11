import { getFirstChar } from './getFirstChar';
/**
 * 转字符串
 * @param obj 数据
 * @returns 字符串
 */
export function toString(obj) {
    if (!obj)
        throw new Error("该变量没有值");
    const chars = JSON.stringify(obj);
    if (getFirstChar(chars) === "\\") {
        return chars.replace(/\\/g, "");
    }
    return chars;
}
