import { getRandom } from '../getRandom/getRandom';

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

export function getRandomArray(length: number): number[];
export function getRandomArray(length: number, min: number, max: number): number[];
export function getRandomArray(length: number, min?: number, max?: number): number[] {
  // 获取参数长度 进行特殊处理
  if (!Number.isInteger(length) || length < 0) throw new Error("length must be a positive integer");
  
  if (arguments.length === 1) return Array.from({ length }, () => getRandom());
  if (min !== undefined && max !== undefined){
    if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) throw new Error("min and max must be finite int and min ≤ max");
    
    return Array.from({ length }, () => getRandom(min, max));
  }
  return []

}