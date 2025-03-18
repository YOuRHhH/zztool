/**
 * 金额格式化
 * @param money 金额
 * @param char 分隔符
 * @param first 首字符
 */
export function moneyFormat(money, char = ",", first = "") {
    if (money === null || money === undefined || (typeof money !== "string" && typeof money !== "number")) {
        throw new Error("Invalid money format");
    }
    if (isNaN(Number(money)))
        return "0";
    let [intPart, decimalPart] = money.toString().split(".");
    intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, char);
    return first + (decimalPart ? `${intPart}.${decimalPart}` : intPart);
}
