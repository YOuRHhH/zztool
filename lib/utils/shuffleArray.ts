/**
 * 随机打乱数组
 * @param array 数组
 * @returns 打乱后的数组
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * const arr = [1,2,3,4,5,6,7,8,9,10];
 * shuffleArray(arr); // 打乱后的数组
 */
export function shuffleArray<T>(array: T[]): T[] {
  if (!Array.isArray(array) || array.length <= 1) return array;
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}