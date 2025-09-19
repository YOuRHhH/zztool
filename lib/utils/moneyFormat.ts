/**
 * 金额格式化
 * @param money 金额
 * @param char 分隔符
 * @param first 首字符
 * @returns string
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * moneyFormat(123456789) // 123,456,789
 * moneyFormat(123456789, "~", "￥") // ￥123~456~789
 */
export function moneyFormat(money: string | number, char = ",", first = ""):string {
  if (money === null || money === undefined || (typeof money !== "string" && typeof money !== "number")) {
    throw new Error("Invalid money format");
  }

  if( isNaN(Number(money)) || (typeof money === 'string' && money === "")) return "0";
  let [intPart, decimalPart] = money.toString().split(".");
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, char);
  return first + (decimalPart ? `${intPart}.${decimalPart}` : intPart);
}