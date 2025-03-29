/**
 * 数据分组
 * @param {*} data
 * @param {*} key
 * @returns {*}
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * groupBy([{name: '张三', age: 18}, {name: '李四', age: 19}, {name: '王五', age: 20}], 'age');
 * // {18: [{name: '张三', age: 18}], 19: [{name: '李四', age: 19}], 20: [{name: '王五', age: 20}]}
 */
export function groupBy(data: any[], key: string) {
  if (!data || !key || !Array.isArray(data) || typeof key !== "string" || !data.length || !data[0].hasOwnProperty(key)){
    return data;
  }
  return data.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}