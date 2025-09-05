/**
 * 获取对应索引的value
 * @param obj 对象
 * @param index 索引
 * @param parentKey 父级key
 * @returns
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @deprecated 此方法与多个函数部分功能雷同，请使用 {@link getValue} 替代，本方法即将废弃，3.0 版本将移除此方法。 
 * @note 此方法与多个函数部分功能雷同，请使用 {@link getValue} 替代，本方法即将废弃，3.0 版本将移除此方法。 
 * @example
 * // 调用示例
 * getSameIndexValue({ a: { b: { c: 1 } } }, "c") // [{ key: "a.b.c", value: 1 }]
 */
export function getSameIndexValue(
  obj: any,
  index: string,
  parentKey: string = ""
): Array<{ key: string; value: any }> {
  console.warn("[DEPRECATED] getSameIndexValue 已弃用，此方法与 getValue 功能雷同，请使用 getValue 替代，3.0 版本将移除此方法。");
  if (typeof obj !== "object" || obj === null) throw new Error("obj 必须是非 null 对象");
  if (typeof index !== "string") throw new Error("index 必须是字符串");
  if (typeof parentKey !== "string") throw new Error("parentKey 必须是字符串");
  

  const arr: { key: string; value: any }[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];

      // 递归处理非 null 的对象类型
      if (typeof value === "object" && value !== null) {
        // 添加 null 检查
        arr.push(...getSameIndexValue(value, index, fullKey));
      }

      // 收集匹配键的值（严格相等检查）
      if (key === index) {
        // 改为独立 if 语句，允许同时处理值和子对象
        arr.push({
          key: fullKey,
          value,
        });
      }
    }
  }
  return arr;
}