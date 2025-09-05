import { getType } from "./getType";
/**
 * 移出对象中的空属性
 * @param {*} obj
 * @returns
 * @example
 * // 调用示例
 * stripEmpty({ a: 1, d:'',z:{a:1,b:'',xx:{},zz:[]}}) // {a:1,z:{a:1}
 */
export function stripEmpty(obj: any): any {
  if (getType(obj) !== "object" || !obj || obj == null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(stripEmpty);
  }
  if (typeof obj !== "object") {
    return obj;
  }
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      stripEmpty(obj[key]);
    }
    if (
      !obj[key] ||
      (Array.isArray(obj[key]) && obj[key].length === 0) ||
      (getType(obj[key]) === "object" && Object.keys(obj[key]).length === 0)
    ) {
      delete obj[key];
    }
  }
  return obj;
}
