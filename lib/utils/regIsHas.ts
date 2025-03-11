/**
 * 判断是否包含某字符
 * @param str 字符串
 * @param char 字符
 * @returns 是否包含
 */
export function regIsHas(str: string, char: string): boolean {
  if (!str || !char) return false;
  return str.includes(char);
}