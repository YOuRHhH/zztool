/**
 * 数组分块
 * 将数组平均分成 `size` 份（当 size <= 1 时返回原数组的浅拷贝）
 * @param data 数组
 * @param size 大小
 * @see {@link https://yourhhh.github.io/zztoolDocument/#chunkArray} API 文档
 * @example
 * // 调用示例
 * const arr = [1,2,3,4,5,6,7,8,9,10];
 * chunkArray(arr, 2); // [[1,2,3,4,5],[6,7,8,9,10]]
 */
export function chunkArray(data, size) {
    if (!Array.isArray(data)) {
        throw new Error("Invalid input data.");
    }
    if (size <= 1)
        return [...data];
    const result = [];
    const lng = Math.ceil(data.length / size);
    for (let i = 0; i < size; i++) {
        result.push(data.slice(i * lng, (i + 1) * lng));
    }
    return result;
}
