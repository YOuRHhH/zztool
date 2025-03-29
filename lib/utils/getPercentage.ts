/**
 * 计算百分比
 * @param {*} part 当前值
 * @param {*} total 总值
 * @param {*} decimalPlaces 小数
 * @returns
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getPercentage(1, 2, 2); // 返回 "50.00%"
 */
export function getPercentage(part: number, total: number, decimalPlaces: number = 2): string {
  if (total === 0) return "0.00%";
  if (typeof part !== "number" || typeof total !== "number" || typeof decimalPlaces !== "number") {
    throw new Error("所有参数必须为数字");
  }
  return ((part / total) * 100).toFixed(decimalPlaces) + "%";
}