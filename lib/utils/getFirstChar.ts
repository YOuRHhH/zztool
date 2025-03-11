/**
 * 获取第一个字符
 * @param str 字符串
 * @returns 第一个字符
 */
export function getFirstChar(str: string) {
  if(typeof str !== 'string' || !str || str.length === 0) return '';
  return str.charAt(0);
}