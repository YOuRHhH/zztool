/**
 * 获取随机数
 * @param min 最小值
 * @param max 最大值
 */
export function getRandom(min: number, max: number): number {
  if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) {
    throw new Error("参数错误，min 应小于等于 max，且都必须为有限数字");
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
