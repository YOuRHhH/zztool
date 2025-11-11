import {getFirstChar} from '../getFirstChar/getFirstChar';
/**
 * 转字符串
 * @param obj 数据
 * @returns 字符串
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * toString({ a: 1 }) // "{\"a\":1}"
 */
export function toString(obj: any) {
  if (!obj) throw new Error("Invalid param");
  const chars = JSON.stringify(obj);
  if (getFirstChar(chars) === "\\") {
    return chars.replace(/\\/g, "");
  }
  return chars;
}