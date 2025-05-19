import { getType } from "./getType";
/**
 * 判断对象中是否有空值
 * @param {Object} obj - 需要检查的对象
 * @param {boolean} returnKeys - 是否返回空值的路径（默认不返回 true/false）
 * @param {string} parentKey - 父级 key（用于递归拼接路径）
 * @param {WeakSet} seen - 用于防止循环引用
 * @returns {boolean | string[]} - 存在空值返回 `true`，否则返回 `false`，或返回所有空值路径
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @note
 * - `NaN` 不算空值。
 * - `0` 被视为空值。
 * @example
 * // 调用示例
 * dataEmpty({ a: 1, b: { c: 2, d: null } }); // false
 * dataEmpty({ a: 1, b: { c: 2, d: null } }, true); // ["b.d"]
 */
export function dataEmpty(
  obj: any,
  returnKeys: boolean = false,
  parentKey: string = "",
  seen = new WeakSet()
): Array<string> | boolean {
  if (!obj || typeof obj !== "object") {
    throw new Error("Invalid argument: obj must be an object");
  }
  if (Array.isArray(obj) && obj.length == 0) {
    return true;
  }
  if (typeof obj === "object" && Object.keys(obj).length === 0) {
    return true;
  }
  const emptyKeys: string[] = [];
  seen.add(obj);
  function checkEmpty(value: any): boolean {
    if (getType(value) == "number") {
      return isNaN(value); // 只判断 NaN，0 不算空值
    }
    return (
      value === "" ||
      value === null ||
      value === undefined ||
      (typeof value === "object" &&
        (Array.isArray(value)
          ? value.length === 0
          : Object.keys(value).length === 0))
    );
  }

  for (const key of Object.keys(obj)) {
    const value = obj[key];
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof value === "object" && value !== null) {
      if (checkEmpty(value)) {
        emptyKeys.push(fullKey);
        continue;
      }
      if (seen.has(value)) continue;
      const nestedResult = dataEmpty(value, true, fullKey, seen);
      if (Array.isArray(nestedResult)) {
        emptyKeys.push(...nestedResult);
      }
    } else if (checkEmpty(value)) {
      emptyKeys.push(fullKey);
    }
  }

  return returnKeys ? emptyKeys : emptyKeys.length > 0;
}
