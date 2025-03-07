/**
 * 计算百分比
 * @param {*} part
 * @param {*} total
 * @param {*} decimalPlaces
 * @returns
 */
export function getPercentage(part, total, decimalPlaces = 2) {
    return ((part / total) * 100).toFixed(decimalPlaces);
}
