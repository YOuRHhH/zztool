import { getRandom } from './getRandom';

/**
 * 获取随机数组
 * @param length 长度
 * @param min 最小值
 * @param max 最大值
 * @returns 生成的随机数组
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getRandomArray(5, 1, 10) // [x, x, x, x, x]
 */
export function getRandomArray(length: number, min: number, max: number): number[] {
  if (!Number.isInteger(length) || length < 0) throw new Error("length 必须是非负整数");
  if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) throw new Error("min 和 max 必须是有限数字，且 min ≤ max");
  
  return Array.from({ length }, () => getRandom(min, max));
}