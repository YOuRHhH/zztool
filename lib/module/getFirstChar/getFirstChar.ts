/**
 * 获取第一个字符
 * @param str 字符串
 * @returns 第一个字符
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getFirstChar('123') // '1'
 */
export function getFirstChar(str: string):string {
  if(typeof str !== 'string' || !str || str.length === 0) return '';
  return str.charAt(0);
}