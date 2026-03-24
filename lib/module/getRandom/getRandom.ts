/**
 * 获取随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 返回一个随机数
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getRandom(1, 10); // xxxx
 */
export function getRandom(): number;
export function getRandom(min: number, max: number): number;
export function getRandom(min?: number, max?: number): number {
  // 获取参数长度 进行特殊处理
  const hasParam = arguments.length;
  if (!hasParam) {
    return Math.random();
  }
  if (min !== undefined && max !== undefined){
    if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) {
      throw new Error("Invalid param min <= max and type must be number");
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return 0
}
