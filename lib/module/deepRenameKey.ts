/**
 * 修改对象中的下标
 * @param {*} data
 * @param {*} index
 * @param {*} newIndex
 * @returns {object}
 * @see {@link https://yourhhh.github.io/zztoolDocument/#deepRenameKey} API 文档
 * @warning 请确保传入的形参合法也length一致
 * @example
 * // 调用示例
 * deepRenameKey({ a: { b: { c: 1 },c:1,d:2 } }, "c,d", "xxx,love") // { a: { b: { xxx: 1 },xxx:1,love:2 } }
 */
export function deepRenameKey<T extends Record<string, any>>(
  data: T,
  index: string,
  newIndex: string
): T {
  if (
    typeof data !== "object" ||
    isEmptyObject(data) ||
    !data ||
    !index ||
    !newIndex
  ) {
    throw new Error("Invalid input param.");
  }
  const newData = JSON.parse(JSON.stringify(data));
  const indexArr = index.split(",");
  const newIndexArr = newIndex.split(",");
  if (indexArr.length !== newIndexArr.length) {
    throw new Error("The number of index and newIndex is not equal.");
  }
  // 索引映射表
  const renameMap = new Map<string, string>();
  for (let i = 0; i < indexArr.length; i++) {
    renameMap.set(indexArr[i].trim(), newIndexArr[i].trim());
  }

  function changeKey(obj: T): any {
    if (obj === null || typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
      return obj.map(changeKey);
    }
    const result: Record<string, any> = {};
    for (const [key, value] of Object.entries(obj)) {
      const newKey = renameMap.get(key) ?? key;
      result[newKey] = changeKey(value);
    }
    return result;
  }
  return changeKey(newData);
}

function isEmptyObject(obj: any) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
