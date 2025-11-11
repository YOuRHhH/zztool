/**
 * 数组分块
 * 将数组分成每块为size大小
 * @param arr 数组
 * @param size 大小
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * const arr = [1,2,3,4,5,6,7,8,9,10];
 * chunkArrayItem(arr, 3); // [[1,2,3], [4,5,6], [7,8,9], [10]]
 */
export function chunkArrayItem(arr: any[], size: number): any[] {
  if (!Array.isArray(arr) || arr.length === 0 || size > arr.length) {
    throw new Error("Invalid input data or size.");
  }
  if (size <= 1) return [...arr];
  const result: any[] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}