/**
 * 获取随机颜色
 * @returns {string}
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getRandomColor() // '#ff0000'
 */
export function getRandomColor():string {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}