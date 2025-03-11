/**
 * 获取字符
 * @param str 字符串
 * @param start 开始位置
 * @param end 结束位置
 * @returns 字符
 */
export function getChar(str: string, start: number, end: number) {
  if (typeof str !== 'string' || !str || str.length === 0 || start < 0 || end > str.length || start >= end) return "";
  const char = str.substring(start, end);
  return char ? char : "";
}