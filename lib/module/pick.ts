/**
 * 获取对应索引的value
 * @param obj 对象
 * @param index 索引
 * @returns
 * @see {@link https://yourhhh.github.io/zztoolDocument/#pick} API 文档
 * @example
 * // 调用示例
 * pick({ a: { b: { c: 1 } } }, "c") // [{ key: "a.b.c", value: 1 }]
 */
export function pick(
  obj: any,
  index: string,
  // parentKey: string = "",
): Array<{ key: string; value: any }> {
  if (typeof obj !== "object" || obj === null) throw new Error("obj must be an object and not null");
  if (typeof index !== "string") throw new Error("index must be string");
  // if (typeof parentKey !== "string") throw new Error("parentKey must be string");
  const arr: { key: string; value: any }[] = [];
  const visited = new WeakSet<Object>();
  // 暂存栈
  const stack: Array<{ value: any; path: string }> = [{value:obj,path:""}];
  while (stack.length > 0){
    const {value:currentData,path} = stack.pop()!;
    if (typeof currentData === "object" && currentData !== null) {
      if (visited.has(currentData)) continue; // 避免循环引用
      visited.add(currentData);
      for (const key in currentData) {
        if (currentData.hasOwnProperty(key)) {
          const fullKey =  path ? `${path}.${key}` : key;
          const value = currentData[key];
          
          if (typeof value === "object" && value !== null) {
            // 入栈
            stack.push({value,path:fullKey});
          }
          if (key === index) {
            arr.push({key: fullKey, value});
          }
        }
      }
    }
  }
  return arr;
}