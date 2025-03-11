/**
 * 深度比较两个对象或数组，返回是否相等或不一致的 key
 * @param {Object|Array} obj1 - 第一个对象/数组
 * @param {Object|Array} obj2 - 第二个对象/数组
 * @param {Object} options - 配置项
 * @param {boolean} options.returnKeys - 是否返回不一致的 key（默认 false）
 * @param {boolean} options.arrayDiff - 是否检查数组内差异（默认 true）
 * @returns {boolean | string[]} - 相等返回 false，不相等返回 true 或不同 key
 */
export function dataEqual(
  obj1: any,
  obj2: any,
  options = {}
): boolean | Array<string> {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    throw new Error("Both arguments must be objects or arrays.");
  }

  const defaultOptions = { returnKeys: false, arrayDiff: true };
  const { returnKeys } = Object.assign(defaultOptions, options);

  const differingKeys: Array<string> = [];
  function isObject(value: any) {
    return value && typeof value === "object" && !Array.isArray(value);
  }
  const deepCompare = (value1: any, value2: any, key: string) => {
    if (isObject(value1) && isObject(value2)) {
      const data = dataEqual(value1, value2, options);
      if (Array.isArray(data)) {
        data.forEach((k: any) => differingKeys.push(`${key}.${k}`));
      }
    } else if (Array.isArray(value1) && Array.isArray(value2)) {
      // 深对比
      value1.forEach((v, i) => {
        if (typeof v == "object" && typeof value2[i] == "object") {
          const data = dataEqual(v, value2[i], options);
          if (Array.isArray(data)) {
            data.forEach((k) => differingKeys.push(`${key}.${i}.${k}`));
          }
        } else if (v !== value2[i]) {
          differingKeys.push(`${key}.${i}`);
        }
      });
    } else if (value1 !== value2) {
      differingKeys.push(key);
    }
  };
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      deepCompare(obj1[key], obj2[key], key);
    }
  }
  return returnKeys ? differingKeys : differingKeys.length > 0;
}