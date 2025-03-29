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
export function getRandom(min: number, max: number): number {
  if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) {
    throw new Error("参数错误，min 应小于等于 max，且都必须为有限数字");
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
