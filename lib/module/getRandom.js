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
export function getRandom(min, max) {
    if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) {
        throw new Error("Invalid param min <= max and type must be number");
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}
