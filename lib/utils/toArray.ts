import {toString} from "./toString";
import { getFirstChar } from "./getFirstChar";
import {regIsHas} from "./regIsHas";

/**
 * 转数组
 * @param obj 数据
 * @param index 分隔符
 * @returns Array
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @since v2.0.73
 * @warning 该方法没有递归逻辑
 * @example
 * // 调用示例
 * toArray(123) // ['1', '2', '3']
 */
export function toArray(obj: any, index = "") {
  if (!obj) return [];
  if (Array.isArray(obj)) return [...obj];
  if (typeof obj === 'object') return Object.values(obj);

  const str = typeof obj === 'string' ? obj : toString(obj);

  if (getFirstChar(str) === '{' || getFirstChar(str) === '['){
    try{
      const jsonData = JSON.parse(str);
      return Array.isArray(jsonData) ? jsonData : Object.values(jsonData);
    }catch (e) {}
  }

  if(!index) {
    if(regIsHas(str,',')) return str.split(",");
    return str.split("");
  }
  return str.split(index);
}