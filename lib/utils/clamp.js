/**
 * 截取数字
 * @param {number} value 值
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns 值
 * @see {@link https://yourhhh.github.io/zztoolDocument/#clamp} API 文档
 * @example
 * clamp(5, 0, 10) // 5
 * clamp(11, 0, 10) // 10
 */
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
