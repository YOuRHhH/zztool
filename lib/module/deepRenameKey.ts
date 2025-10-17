import { toArray } from "./toArray";
/**
 * 修改对象中的下标
 * @param {*} data
 * @param {*} index
 * @param {*} newIndex
 * @returns {object}
 * @see {@link https://yourhhh.github.io/zztoolDocument/#deepRenameKey} API 文档
 * @note 
 * - 2.5.4 新增功能：支持多个下标同时修改
 * @example
 * // 调用示例
 * deepRenameKey({ a: { b: { c: 1 },c:1 } }, "c", "xxx") // { a: { b: { xxx: 1 },xxx:1 } }
 * deepRenameKey({ a: { b: { c: 1 },c:1 } }, "c,b", "xxx,yyy") // { a: { yyy: { xxx: 1 },xxx:1 } }
 */
export function deepRenameKey<T extends object>(data:T, index:string, newIndex:any):T {
  if (typeof data !== "object" || isEmptyObject(data) || !data || !index || !newIndex) {
      throw new Error("Invalid input param.");
  }
  function renameFn (){
  }

  const clone:any = Array.isArray(data) ? [] : {};
  const indexArr = toArray(index,',');
  const newIndexArr = toArray(newIndex,',');

  for(let i = 0; i < indexArr.length; i++){
    const index = indexArr[i];
    const newIndex = newIndexArr[i];
    // 判断这个下标是否存在,不抛错但是需要提醒，继续执行下一个
    
  }

  return clone;
}

function isEmptyObject(obj:any) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}