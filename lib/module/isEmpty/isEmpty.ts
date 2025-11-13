import { defaultCheckEmpty,isNode } from "../../utils/public";
import { getType } from "../getType/getType";
interface IsEmptyOptions {
  returnKeys?: boolean;
  parentKey?: string;
  checkEmptyFn?: (value: any) => boolean;
  ignoreKeys?: string[];
  maxDepth?: number;
}

/**
 * 数据全部为空
 * @param {Object} data - 需要检查的对象
 * @param options
 * @param {boolean} options.returnKeys - 是否返回空值的路径（默认返回 true/false）
 * @param {string} options.parentKey - 父级路径（默认为空字符串）
 * @param {Function} options.checkEmptyFn - 自定义判断是否为空的函数（默认使用内置函数）
 * @param {Array<string>} options.ignoreKeys - 忽略的键名（默认为空数组）
 * @param {number} options.maxDepth - 最大递归深度（默认无限制）
 * @returns {Array<string> | boolean} - 有空值返回 `true`，否则返回 `false`
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @throws {Error} - 当传入数据不是对象或数组时抛出
 * @note
 * - 具体请看`defaultCheckEmpty`函数
 * - 核心空值定义（不可覆盖）：`''`、`undefined`、`null`、`{}`、`[]` 永远被视为空值
 * - checkEmptyFn 用于在核心空值基础上扩展额外的空值判断逻辑，
 * 
 * - 自定义判断是否为空的函数
 * checkEmptyFn:(val) => {
 *   const type = getType(val);
 *   if(type === 'object' && Object.keys(val).length == 0){
 *     return true;
 *   }else{
 *     return false;
 *   }
 * }
 * @example
 * // 调用示例
 * const obj = { a: 1, b: 2, 3:{} };
 * isEmpty(obj);  // true
 */
export function isEmpty<T extends any>(
  data:T,
  options?: IsEmptyOptions & { returnKeys:true }
):any[];
export function isEmpty<T extends any>(
  data:T,
  options?: IsEmptyOptions & { returnKeys:false }
):boolean;
export function isEmpty<T extends any>(
  data: T,
  options: IsEmptyOptions = {}
): boolean | any[] {
  const {
    returnKeys = false,
    parentKey = '',
    checkEmptyFn,
    ignoreKeys = [],
    maxDepth = Infinity,
  } = options;
  // 防止不合法的参数输入
  if (basicJudgment(data)){
    return true;
  }
  // 防止循环引用
  const seen = new WeakSet();
  const checkEmpty = checkEmptyFn || defaultCheckEmpty;
  if (data && typeof data === "object") {
    seen.add(data);
  }
  const resultKeys: string[] = [];

  function traverse(obj: any, currentKey: string, depth: number) {
    if (depth > maxDepth) return;
    // FIX: 稀疏数组(new Array(10))
    if (Array.isArray(obj) && obj.length > 0 && Object.entries(obj).length == 0){
        resultKeys.push(currentKey);
    }
    // FIX: Buffer 对象
    if (isNode && Buffer.isBuffer(obj) && !obj.toString()) {
      resultKeys.push(currentKey);
    }
    // 防止其他类型递归
    typeof obj === 'object' && Object.entries(obj).forEach(([key, value]) => {
      const fullKey = currentKey ? `${currentKey}.${key}` : key;

      if (ignoreKeys.includes(fullKey)) {
        return; // 忽略指定字段
      }

      const isEmptyVal = checkEmpty(value);
      if(isEmptyVal){
        resultKeys.push(fullKey);
      }else{
        if(!seen.has(value as object)){
          traverse(value, fullKey, depth + 1);
        }
      }
    });
  }

  traverse(data, parentKey, 1);
  
  return returnKeys ? resultKeys : resultKeys.length > 0;
}

function basicJudgment(data:any):boolean {
  if (data === null || data === undefined){
    return true;
  }
  if (typeof data === 'string'){
    return data.trim() === '';
  }
  if (Array.isArray(data)){
    return data.length === 0;
  }
  if (getType(data) === 'object'){
    return Object.keys(data).length === 0;
  }
  return false;
}