/**
 * 合并数据，取交集/并集/差集/补集
 * @param {*} data1
 * @param {*} data2
 * @param {*} type 1：并集，2：交集，3：差集，4：补集
 * 并集：合并去重
 * 交集：两个数组都有的值
 * 差集：data1中有，data2中没有的值
 * 补集：两个数组中各自没有的值
 */
export function dataMerge<T>(data1: T[], data2: T[], type: number = 1): T[] {
  if (!Array.isArray(data1) || !Array.isArray(data2)) return [];
  switch (type) {
    case 1:
      return Array.from(new Set([...data1, ...data2]));
    case 2:
      return data1.filter(v => data2.includes(v));
    case 3:
      return data1.filter(v => !data2.includes(v));
    case 4:
      return [...data1.filter(v => !data2.includes(v)), ...data2.filter(v => !data1.includes(v))];
    default:
      return [];
  }
}