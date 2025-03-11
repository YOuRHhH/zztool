
/**
 * 判断是否为邮箱
 * @param str 字符串
 * @returns 是否为邮箱
 */
export function regEmail(str: string) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str);
}