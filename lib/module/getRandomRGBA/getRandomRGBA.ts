import {getRandom} from "../getRandom/getRandom";
/**
 * 获取随机rgba颜色
 * @returns rgba颜色
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getRandomRGBA() // rgba(0,0,0,0.5)
 */
export function getRandomRGBA():String {
  return `rgba(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)},${
    getRandom(0, 100) / 100
  })`;
}