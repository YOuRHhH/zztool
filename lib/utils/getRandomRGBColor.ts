import {getRandom} from './getRandom';
/**
 * 获取随机rgb颜色
 * @returns {string}
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getRandomRGBColor(); // rgb(255, 0, 0)
 */
export function getRandomRGBColor() {
  return `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`;
}