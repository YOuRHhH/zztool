/**
 * 数组分块
 * 将数组分成size块
 * @param data 数组
 * @param size 大小
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * const arr = [1,2,3,4,5,6,7,8,9,10];
 * chunkArray(arr, 2); // [[1,2,3,4,5],[6,7,8,9,10]]
 */
export function chunkArray(data: any[], size: number): any[] {
  if (!Array.isArray(data) || data.length === 0 || size <= 0 || size > data.length) {
    throw new Error("Invalid input data or size.");
  }
  const result: any[] = [];
  const lng = Math.ceil(data.length / size);
  for (let i = 0; i < size; i++) {
    result.push(data.slice(i * lng, (i + 1) * lng));
  }
  return result;
}