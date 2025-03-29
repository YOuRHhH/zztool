/**
 * 延迟函数
 * @param {number} ms
 * @returns {Promise<void>}
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * await sleep(1000);
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}