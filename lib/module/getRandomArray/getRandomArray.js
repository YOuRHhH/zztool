import { getRandom } from '../getRandom/getRandom';
export function getRandomArray(length, min, max) {
    // 获取参数长度 进行特殊处理
    if (!Number.isInteger(length) || length < 0)
        throw new Error("length must be a positive integer");
    if (arguments.length === 1)
        return Array.from({ length }, () => getRandom());
    if (min !== undefined && max !== undefined) {
        if (!Number.isFinite(min) || !Number.isFinite(max) || min > max)
            throw new Error("min and max must be finite int and min ≤ max");
        return Array.from({ length }, () => getRandom(min, max));
    }
    return [];
}
