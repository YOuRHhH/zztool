import { getRandom } from './getRandom';
/**
 * 获取随机数组
 * @param length 长度
 * @param min 最小值
 * @param max 最大值
 * @returns 生成的随机数组
 */
export function getRandomArray(length, min, max) {
    if (!Number.isInteger(length) || length < 0)
        throw new Error("length 必须是非负整数");
    if (!Number.isFinite(min) || !Number.isFinite(max) || min > max)
        throw new Error("min 和 max 必须是有限数字，且 min ≤ max");
    return Array.from({ length }, () => getRandom(min, max));
}
