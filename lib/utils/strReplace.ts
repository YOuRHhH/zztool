/**
 * 字符串替换
 * @param str 字符串
 * @param start 开始位置
 * @param end 结束位置
 * @param icon 替换字符
 * @returns 替换后的字符串
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * strReplace('123456789', 3, 6) // 123***789
 */
export function strReplace(str:string, start:number, end:number,icon='*') {
  if(typeof str !== 'string' || str.length === 0 || start < 0 || end > str.length || start >= end) return str;
  return str.slice(0, start) + icon.repeat(end - start) + str.slice(end);
}