/**
 * 计算百分比
 * @param {*} part
 * @param {*} total
 * @param {*} decimalPlaces
 * @returns
 */
export function getPercentage(part, total, decimalPlaces = 2) {
    if (total === 0)
        return "0.00%";
    if (typeof part !== "number" || typeof total !== "number" || typeof decimalPlaces !== "number") {
        throw new Error("所有参数必须为数字");
    }
    return ((part / total) * 100).toFixed(decimalPlaces) + "%";
}
