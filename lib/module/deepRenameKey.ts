/**
 * 修改对象中的下标
 * @param {*} data
 * @param {*} index
 * @param {*} newIndex
 * @returns {object}
 * @see {@link https://yourhhh.github.io/zztoolDocument/#deepRenameKey} API 文档
 * @example
 * // 调用示例
 * deepRenameKey({ a: { b: { c: 1 },c:1 } }, "c", "xxx") // { a: { b: { xxx: 1 },xxx:1 } }
 */
export function deepRenameKey<T extends object>(data:T, index:any, newIndex:any):T {
  if (typeof data !== "object" || isEmptyObject(data) || !data || !index || !newIndex) {
      throw new Error("Invalid input param.");
  }
  const clone:any = Array.isArray(data) ? [] : {};

  for (const key in data) {
    if (!Object.prototype.hasOwnProperty.call(data, key)) continue;

    const value = data[key];
    const replacedKey = key === index ? newIndex : key;

    if (value && typeof value === 'object') {
      clone[replacedKey] = deepRenameKey(value, index, newIndex);
    } else {
      clone[replacedKey] = value;
    }
  }

  return clone;
}

function isEmptyObject(obj:any) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}