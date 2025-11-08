import { getType } from './getType';
import { arrayTrim } from "./arrayTrim";
import { defaultCheckEmpty } from "../utils/public";
interface stripEmptyOption {
  filterArray?: boolean;
  checkEmptyFn?: (value: any) => boolean;
}
/**
 * 移出对象中的空属性
 * @param {*} obj 对象
 * @param {Object} option 配置项
 * @param {Boolean} option.filterArray 默认`true` 是否过滤数组中的空项
 * @param {Function} option.checkEmptyFn 默认`defaultCheckEmpty` 是否过滤数组中的空项
 * @note 内部使用 `arrayTrime` 函数过滤数组中的空项
 * @warning 
 * - 空数组都会被过滤掉`arr:[]`
 * - `option.filterArray = false`:`arr['']`则不会被过滤
 * @returns {Object}
 * @since 2.4.1
 * @example
 * // 调用示例
 * stripEmpty({ a: 1, d:'',z:{a:1,b:'',xx:{},zz:[]}}) // {a:1,z:{a:1}
 */
export function stripEmpty<T extends Record<string, any>>(obj: T, option?:stripEmptyOption): T {
  if (typeof obj !== "object" || !obj || obj === null) {
    return obj;
  }
  const { checkEmptyFn,filterArray = true } = option || {};
  const checkEmpty = checkEmptyFn || defaultCheckEmpty;
  for (const key in obj) {
    const value = obj[key];
    const type = getType(value);
    if (type === 'object'){
      stripEmpty(value, option); // 先递归
      if(checkEmpty(value)){
        delete obj[key];
        continue;
      }
      stripEmpty(value,option);
    } else if (type === 'array' && filterArray){
      obj[key] = arrayTrim(value) as any;
      stripEmpty(obj[key], option);
      if(checkEmpty(value)){
        delete obj[key];
        continue;
      }
      stripEmpty(obj[key],option);
    } else if (checkEmpty(value)) {
      delete obj[key];
      continue;
    }
  }
  return obj;
}
