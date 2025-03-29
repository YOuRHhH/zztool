/**
 * 获取字符
 * @param str 字符串
 * @param start 开始位置
 * @param end 结束位置
 * @returns string
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getChar('123456', 1, 3) // 23
 */
export function getChar(str: string, start: number, end: number) {
  if (typeof str !== 'string' || !str || str.length === 0 || start < 0 || end > str.length || start >= end) return "";
  const char = str.substring(start, end);
  return char ? char : "";
}