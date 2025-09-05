/**
 * 数据分组
 * @param {*} data
 * @param {*} key
 * @returns {*}
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @experimental 此方法为实验功能，未来可能调整 API 或返回结构
 * @example
 * // 调用示例
 */
export function groupBy(data: any[], key: string):any {
  if (!data || !key || !Array.isArray(data) || typeof key !== "string" || !data.length || !data[0].hasOwnProperty(key)){
    return data;
  }
  const map = new Map();
  const others = [];

  for (const item of data) {
    const groupKey = item[key];
    if (groupKey) {
      if (!map.has(groupKey)) {
        map.set(groupKey, { ...item, children: [] });
      }
      map.get(groupKey).children.push(item);
    } else {
      others.push(item);
    }
  }
  return [...map.values(), ...others];
}