import { defaultCheckEmpty } from "../utils/public";
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
 * @returns {Array<string> | boolean} - 全部为空时返回 `false`，否则返回 `true`
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @throws {Error} - 当传入数据不是对象或数组时抛出
 * @note
 * - 具体请看`defaultCheckEmpty`函数
 * - 空值
 * -- `''`,`undefined`,`null`,`{}`,`[]`
 * - 不为空值
 * -- `false`,`NaN`,`Symbol()`,`0`
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
export function isEmpty<T extends object>(
  data:T,
  options?: IsEmptyOptions & { returnKeys:true }
):any[];
export function isEmpty<T extends object>(
  data:T,
  options?: IsEmptyOptions & { returnKeys:false }
):boolean;
export function isEmpty<T extends object>(
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
  // 防止循环引用
  const seen = new WeakSet();
  if (Array.isArray(data) && data.length === 0) {
    return false;
  }
  if (typeof data === "object" && data !== null && Object.keys(data).length === 0) {
    return false;
  }

  const checkEmpty = checkEmptyFn || defaultCheckEmpty;
  seen.add(data);
  const resultKeys: string[] = [];

  function traverse(obj: any, currentKey: string, depth: number) {
    if (depth > maxDepth) return;
    // 防止其他类型递归
    typeof obj === 'object' && Object.entries(obj).forEach(([key, value]) => {
      const fullKey = currentKey ? `${currentKey}.${key}` : key;

      if (ignoreKeys.includes(fullKey)) {
        return; // 忽略指定字段
      }

      const isNotEmpty = !checkEmpty(value);

      if (isNotEmpty) {
        if(!seen.has(value as object)){
          traverse(value, fullKey, depth + 1);
        }
      } else {
        resultKeys.push(fullKey);
      }
    });
  }

  traverse(data, parentKey, 1);
  
  return returnKeys ? resultKeys : resultKeys.length > 0;
}