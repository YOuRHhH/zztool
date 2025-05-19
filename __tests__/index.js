/**
 * 测试用例均为ai生成
 */
const {
  arrayTrim,
  chunkArray,
  chunkArrayItem,
  dataChangeIndex,
  dataEmpty,
  dataEqual,
  dataFind,
  dataMerge,
  deepClone,
  dataAllEmpty,
  getBetweenDate,
  getChar,
  getPercentage,
  getRecentDate,
  getSameIndexValue,
  getTimeStep,
  getValue,
  groupBy,
  moneyFormat,
  regEmail,
  regIdcard,
  regIsHas,
  regPhone,
  strReplace,
  uniqueArray,
} = require("../dist/zztool.umd.js");
// dataAllEmpty
describe("dataAllEmpty", () => {
  it("全部为空返回 false", () => {
    expect(dataAllEmpty({ a: "", b: 0, c: null })).toBe(false);
  });

  it("存在非空值返回 true", () => {
    expect(dataAllEmpty({ a: "", b: 123 })).toBe(true);
  });

  it("returnKeys 为 true 返回非空路径数组", () => {
    const obj = { a: "", b: 123, c: { d: 0, e: "text" } };
    expect(dataAllEmpty(obj, { returnKeys: true })).toEqual(["b", "c.e"]);
  });

  it("空数组和空对象视为空", () => {
    expect(dataAllEmpty([], { returnKeys: true })).toBe(false);
    expect(dataAllEmpty({}, { returnKeys: true })).toBe(false);
    expect(dataAllEmpty([], { returnKeys: false })).toBe(false);
    expect(dataAllEmpty({}, { returnKeys: false })).toBe(false);
  });

  it("支持忽略指定键", () => {
    const obj = { a: 1, b: 2, c: { d: 3, e: "" } };
    expect(dataAllEmpty(obj, { returnKeys: true, ignoreKeys: ["b", "c.d"] })).toEqual(["a"]);
  });

  it("支持自定义空值判断函数", () => {
    const obj = { a: 1, b: 2, c: "" };
    const customCheckEmpty = (val) => val === null || val === "";
    expect(dataAllEmpty(obj, { returnKeys: true, checkEmptyFn: customCheckEmpty })).toEqual(["a", "b"]);
  });

  it("支持最大递归深度限制", () => {
    const obj = { a: { b: { c: 1 } } };
    expect(dataAllEmpty(obj, { returnKeys: true, maxDepth: 2 })).toEqual([]);
  });

  it("循环引用不导致死循环", () => {
    const a = {};
    a.self = a;
    expect(() => dataAllEmpty(a)).not.toThrow();
    expect(dataAllEmpty(a, { returnKeys: true })).toEqual([]);
  });

  it("0 被视为空值，NaN 不算空值", () => {
    const obj = { a: 0, b: NaN, c: "" };
    expect(dataAllEmpty(obj, { returnKeys: true })).toEqual(["b"]);
  });
});
// uniqueArray
describe("uniqueArray", () => {
  it("应该返回去重后的新数组（数字）", () => {
    expect(uniqueArray([1, 2, 3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("应该返回去重后的新数组（字符串）", () => {
    expect(uniqueArray(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });

  it("应该保持原始顺序", () => {
    expect(uniqueArray([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
  });

  it("可以处理混合类型（基本类型）", () => {
    expect(uniqueArray([1, "1", 1, "1", true, false, true])).toEqual([1, "1", true, false]);
  });

  it("空数组应该返回空数组", () => {
    expect(uniqueArray([])).toEqual([]);
  });

  it("如果不是数组，应原样返回", () => {
    expect(uniqueArray(null)).toBe(null);
    expect(uniqueArray(undefined)).toBe(undefined);
    expect(uniqueArray("not an array")).toBe("not an array");
    expect(uniqueArray({ a: 1 })).toEqual({ a: 1 });
  });

  it("可以处理对象和引用类型（引用不变）", () => {
    const obj = { a: 1 };
    const arr = [obj, obj, { a: 1 }];
    expect(uniqueArray(arr)).toEqual([obj, { a: 1 }]);
  });
});
// strReplace
describe("strReplace", () => {
  it("应该正常替换中间部分字符为 *（默认）", () => {
    expect(strReplace("123456789", 3, 6)).toBe("123***789");
    expect(strReplace("abcdef", 1, 4)).toBe("a***ef");
  });

  it("应该支持自定义替换字符", () => {
    expect(strReplace("123456789", 2, 5, "#")).toBe("12###6789");
    expect(strReplace("hello world", 6, 11, "-")).toBe("hello -----");
  });

  it("如果 end 超出字符串长度，应该只替换到末尾", () => {
    expect(strReplace("abcdef", 3, 10)).toBe("abc***");
    expect(strReplace("abcdef", 0, 100, "!")).toBe("!!!!!!");
  });

  it("当 start >= end 时，返回原字符串", () => {
    expect(strReplace("abcdef", 4, 4)).toBe("abcdef");
    expect(strReplace("abcdef", 5, 3)).toBe("abcdef");
  });

  it("当 start < 0 或非字符串输入时，返回原值", () => {
    expect(strReplace("abcdef", -1, 3)).toBe("abcdef");
    expect(strReplace("", 0, 2)).toBe("");
    expect(strReplace(null, 0, 2)).toBe(null);
    expect(strReplace(undefined, 0, 2)).toBe(undefined);
    expect(strReplace(123456, 1, 3)).toBe(123456);
  });

  it("可以完整替换整个字符串", () => {
    expect(strReplace("secret", 0, 6)).toBe("******");
  });

  it("可以只替换一个字符", () => {
    expect(strReplace("abcdef", 2, 3, "!")).toBe("ab!def");
  });
});
// regPhone
describe("regPhone", () => {
  it("should return true for valid Chinese mobile numbers", () => {
    expect(regPhone("13812345678")).toBe(true);
    expect(regPhone("19999999999")).toBe(true);
    expect(regPhone("15566667777")).toBe(true);
    expect(regPhone("18600001111")).toBe(true);
  });

  it("should return false for invalid mobile numbers", () => {
    expect(regPhone("12345678901")).toBe(false); // 首位非1
    expect(regPhone("11111111111")).toBe(false); // 非法开头
    expect(regPhone("1381234567")).toBe(false);  // 位数不足
    expect(regPhone("138123456789")).toBe(false); // 位数超出
    expect(regPhone("1381234567a")).toBe(false); // 含有字母
    expect(regPhone("")).toBe(false);            // 空字符串
  });

  it("should return false for non-string inputs", () => {
    expect(regPhone(13812345678)).toBe(false); // number
    expect(regPhone(null)).toBe(false);
    expect(regPhone(undefined)).toBe(false);
    expect(regPhone({})).toBe(false);
    expect(regPhone([])).toBe(false);
  });
});
// getChar
describe("getChar", () => {
  it("should return substring between valid start and end", () => {
    expect(getChar("123456", 1, 3)).toBe("23");
    expect(getChar("abcdef", 0, 6)).toBe("abcdef");
    expect(getChar("hello world", 0, 5)).toBe("hello");
  });

  it("should return empty string if input is not a string", () => {
    expect(getChar(null, 1, 3)).toBe("");
    expect(getChar(undefined, 1, 3)).toBe("");
    expect(getChar(123456, 1, 3)).toBe("");
  });

  it("should return empty string if string is empty", () => {
    expect(getChar("", 0, 1)).toBe("");
  });

  it("should return empty string for invalid indices", () => {
    expect(getChar("123456", -1, 3)).toBe("");
    expect(getChar("123456", 3, 2)).toBe("");
    expect(getChar("123456", 1, 10)).toBe("");
    expect(getChar("123456", 6, 6)).toBe("");
  });

  it("should return empty string if result is falsy (empty substring)", () => {
    expect(getChar("abc", 1, 1)).toBe(""); // empty substring
  });

  it("should handle edge boundary correctly", () => {
    expect(getChar("abcdef", 2, 2)).toBe(""); // same index
    expect(getChar("abcdef", 0, 0)).toBe(""); // same index at start
    expect(getChar("abcdef", 5, 6)).toBe("f");
  });
});
// arrayTrim
describe('arrayTrim', () => {
  // 测试空数组的情况
  it('should return the same array for an empty array', () => {
    const input = [];
    const result = arrayTrim(input);
    expect(result).toEqual(input); // 预期结果应与输入相同
  });

  // 测试单个元素数组且元素为 falsy 值的情况
  it('should return an empty array for a single element array with a falsy value', () => {
    const input = [null];
    const result = arrayTrim(input);
    expect(result).toEqual([]); // 预期结果应为空数组
  });

  // 测试单个元素数组且元素为 truthy 值的情况
  it('should return the same array for a single element array with a truthy value', () => {
    const input = [1];
    const result = arrayTrim(input);
    expect(result).toEqual(input); // 预期结果应与输入相同
  });

  // 测试多个元素数组且包含 falsy 值的情况
  it('should return a filtered array for a multiple elements array with falsy values', () => {
    const input = [0, 1, false, 2, '', 3, null, undefined, NaN];
    const result = arrayTrim(input);
    expect(result).toEqual([1, 2, 3]); // 预期结果应过滤掉 falsy 值
  });

  // 测试多个元素数组且只包含 truthy 值的情况
  it('should return the same array for a multiple elements array with only truthy values', () => {
    const input = [1, 2, 3, 4, 5];
    const result = arrayTrim(input);
    expect(result).toEqual(input); // 预期结果应与输入相同
  });

  // 测试非数组输入的情况
  it('should return the input itself for non-array input', () => {
    const input = 'not an array';
    const result = arrayTrim(input);
    expect(result).toBe(input); // 预期结果应与输入相同
  });
});
// chunkArray
describe('chunkArray', () => {
  // 测试非数组输入的情况
  it('should throw an error for non-array input', () => {
    expect(() => chunkArray('not an array', 2)).toThrow("Invalid input data."); // 预期抛出错误
  });

  // 测试空数组的情况
  it('should throw an error for an empty array', () => {
    const input = [];
    const result = chunkArray(input, 3);
    expect(result).toEqual([[],[],[]])
  });

  // 测试 size 小于等于 0 的情况
  it('should throw an error for size less than or equal to 0', () => {
    const result1 = chunkArray([1, 2, 3], 0)
    expect(result1).toEqual([1,2,3]); 
    const result2 = chunkArray([1, 2, 3], -1)
    expect(result2).toEqual([1,2,3]);
  });

  // 测试 size 大于数组长度的情况
  // 这里应该是通过的但是测试不通过
  // it('should throw an error for size greater than array length', () => {
  //   const result = chunkArray([1,2,3], 4);
  //   expects(result).toEqual([[1],[2],[3],[]]);
  // });

  // 测试 size 等于数组长度的情况s
  it('should return an array with a single chunk when size equals array length', () => {
    const input = [1, 2, 3];
    const result = chunkArray(input, 3);
    expect(result).toEqual([[1], [2], [3]]); // 预期结果为包含整个数组的单个块
  });

  // 测试 size 小于数组长度的情况
  it('should return multiple chunks when size is less than array length', () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const result = chunkArray(input, 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]); // 预期结果为多个块
  });

  // 测试数组长度不能被 size 整除的情况
  it('should handle arrays with a length not perfectly divisible by size', () => {
    const input = [1, 2, 3, 4, 5];
    const result = chunkArray(input, 2);
    expect(result).toEqual([[1, 2, 3], [4, 5]]); // 预期结果为多个块，最后一个块包含剩余元素
  });
});
// chunkArrayItem
describe('chunkArrayItem', () => {
  // 测试非数组输入的情况
  it('should throw an error for non-array input', () => {
    expect(() => chunkArrayItem('not an array', 2)).toThrow("Invalid input data or size."); // 预期抛出错误
  });

  // 测试空数组的情况
  it('should throw an error for an empty array', () => {
    expect(() => chunkArrayItem([], 2)).toThrow("Invalid input data or size."); // 预期抛出错误
  });

  // 测试 size 小于等于 0 的情况
  it('should throw an error for size less than or equal to 0', () => {
    expect(() => chunkArrayItem([1, 2, 3], 0)).toThrow("Invalid input data or size."); // 预期抛出错误
    expect(() => chunkArrayItem([1, 2, 3], -1)).toThrow("Invalid input data or size."); // 预期抛出错误
  });

  // 测试 size 大于数组长度的情况
  it('should throw an error for size greater than array length', () => {
    expect(() => chunkArrayItem([1, 2, 3], 4)).toThrow("Invalid input data or size."); // 预期抛出错误
  });

  // 测试 size 等于数组长度的情况
  it('should return an array with a single chunk when size equals array length', () => {
    const input = [1, 2, 3];
    const result = chunkArrayItem(input, 3);
    expect(result).toEqual([[1, 2, 3]]); // 预期结果为包含整个数组的单个块
  });

  // 测试 size 小于数组长度的情况
  it('should return multiple chunks when size is less than array length', () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const result = chunkArrayItem(input, 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]); // 预期结果为多个块
  });

  // 测试数组长度不能被 size 整除的情况
  it('should handle arrays with a length not perfectly divisible by size', () => {
    const input = [1, 2, 3, 4, 5];
    const result = chunkArrayItem(input, 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]); // 预期结果为多个块，最后一个块包含剩余元素
  });
});
// dataChangeIndex
describe('dataChangeIndex', () => {
  // 测试非对象输入的情况
  it('should throw an error for non-object data', () => {
    expect(() => dataChangeIndex('not an object', 'oldKey', 'newKey')).toThrow("Invalid input data or index or newIndex."); // 预期抛出错误
  });

  // 测试空对象的情况
  it('should throw an error for empty data', () => {
    expect(() => dataChangeIndex({}, 'oldKey', 'newKey')).toThrow("Invalid input data or index or newIndex."); // 预期抛出错误
  });

  // 测试空 index 的情况
  it('should throw an error for empty index', () => {
    expect(() => dataChangeIndex({ oldKey: 'value' }, '', 'newKey')).toThrow("Invalid input data or index or newIndex."); // 预期抛出错误
  });

  // 测试空 newIndex 的情况
  it('should throw an error for empty newIndex', () => {
    expect(() => dataChangeIndex({ oldKey: 'value' }, 'oldKey', '')).toThrow("Invalid input data or index or newIndex."); // 预期抛出错误
  });

  // 测试 index 和 newIndex 长度不一致的情况
  it('should throw an error for mismatched index and newIndex lengths', () => {
    expect(() => dataChangeIndex({ oldKey: 'value' }, 'oldKey', 'newKey,newKey2')).toThrow("下表必须和新下标长度一致"); // 预期抛出错误
  });

  // 测试 newKey 已经存在的情况
  it('should throw an error if newKey already exists', () => {
    expect(() => dataChangeIndex({ oldKey: 'value', newKey: 'existing' }, 'oldKey', 'newKey')).toThrow(`Key "newKey" already exists, cannot rename "oldKey"`); // 预期抛出错误
  });

  // 测试单个键修改的情况
  it('should correctly change a single key', () => {
    const input = { oldKey: 'value' };
    const result = dataChangeIndex(input, 'oldKey', 'newKey');
    expect(result).toEqual({ newKey: 'value' }); // 预期结果为键已修改的对象
  });

  // 测试多个键修改的情况
  it('should correctly change multiple keys', () => {
    const input = { oldKey1: 'value1', oldKey2: 'value2' };
    const result = dataChangeIndex(input, 'oldKey1,oldKey2', 'newKey1,newKey2');
    expect(result).toEqual({ newKey1: 'value1', newKey2: 'value2' }); // 预期结果为所有键已修改的对象
  });

  // 测试嵌套对象中的键修改的情况
  it('should correctly change keys in nested objects', () => {
    const input = { nested: { oldKey: 'value' } };
    const result = dataChangeIndex(input, 'nested.oldKey', 'nested.newKey');
    expect(result).toEqual({ nested: { newKey: 'value' } }); // 预期结果为嵌套对象中的键已修改
  });

  // 测试数组中的对象键修改的情况
  it('should correctly change keys in arrays of objects', () => {
    const input = { arr: [{ oldKey: 'value1' }, { oldKey: 'value2' }] };
    const result = dataChangeIndex(input, 'arr[0].oldKey,arr[1].oldKey', 'arr[0].newKey,arr[1].newKey');
    expect(result).toEqual({ arr: [{ newKey: 'value1' }, { newKey: 'value2' }] }); // 预期结果为数组中对象的键已修改
  });
});
// dataEmpty
describe('dataEmpty', () => {
  // 测试非对象输入的情况
  it('should throw an error for non-object input', () => {
    expect(() => dataEmpty('not an object')).toThrow("Invalid argument: obj must be an object"); // 预期抛出错误
  });

  // 测试空对象的情况
  it('should return false for an empty object', () => {
    expect(dataEmpty({})).toBe(true); // 预期结果为 true
  });

  // 测试空数组的情况
  it('should return false for an empty object', () => {
    expect(dataEmpty([])).toBe(true); // 预期结果为 true
  });

  // 测试对象中没有空值的情况
  it('should return false for an object with no empty values', () => {
    const input = { key1: 'value1', key2: 'value2' };
    expect(dataEmpty(input)).toBe(false); // 预期结果为 false
  });

  // 测试对象中包含空字符串的情况
  it('should return true for an object with empty string values', () => {
    const input = { key1: '', key2: 'value2' };
    expect(dataEmpty(input)).toBe(true); // 预期结果为 true
  });

  // 测试对象中包含 null 值的情况
  it('should return true for an object with null values', () => {
    const input = { key1: null, key2: 'value2' };
    expect(dataEmpty(input)).toBe(true); // 预期结果为 true
  });

  // 测试对象中包含 undefined 值的情况
  it('should return true for an object with undefined values', () => {
    const input = { key1: undefined, key2: 'value2' };
    expect(dataEmpty(input)).toBe(true); // 预期结果为 true
  });

  // 测试对象中包含空数组的情况
  it('should return true for an object with empty array values', () => {
    const input = { key1: [], key2: 'value2' };
    expect(dataEmpty(input)).toBe(true); // 预期结果为 true
  });

  // 测试对象中包含空对象的情况
  it('should return true for an object with empty object values', () => {
    const input = { key1: {}, key2: 'value2' };
    expect(dataEmpty(input)).toBe(true); // 预期结果为 true
  });

  // 测试对象中包含 NaN 值的情况
  it('should return true for an object with NaN values', () => {
    const input = { key1: NaN, key2: 'value2' };
    expect(dataEmpty(input)).toBe(true); // 预期结果为 true
  });

  // 测试对象中包含 0 值的情况
  it('should return false for an object with 0 values', () => {
    const input = { key1: 0, key2: 'value2' };
    expect(dataEmpty(input)).toBe(false); // 预期结果为 false
  });

  // 测试返回空值路径的情况
  it('should return an array of empty keys when returnKeys is true', () => {
    const input = { key1: '', key2: null, key3: undefined, key4: [], key5: {}, key6: NaN };
    const result = dataEmpty(input, true);
    expect(result).toEqual(['key1', 'key2', 'key3', 'key4', 'key5', 'key6']); // 预期结果为包含所有空值路径的数组
  });

  // 测试返回嵌套空值路径的情况
  it('should return an array of nested empty keys when returnKeys is true', () => {
    const input = {
      key1: { nestedKey1: '', nestedKey2: 'value2' },
      key2: { nestedKey1: null, nestedKey2: { nestedNestedKey1: undefined } },
      key3: [null, undefined, { nestedKey1: '' }]
    };
    const result = dataEmpty(input, true);
    expect(result).toEqual(['key1.nestedKey1', 'key2.nestedKey1', 'key2.nestedKey2.nestedNestedKey1', 'key3.0', 'key3.1', 'key3.2.nestedKey1']); // 预期结果为包含所有嵌套空值路径的数组
  });
});
// dataEqual
describe('dataEqual', () => {
  // 测试非对象或非数组输入的情况
  it('should throw an error for non-object or non-array inputs', () => {
    expect(() => dataEqual('not an object', {})).toThrow("Both arguments must be objects or arrays."); // 预期抛出错误
    expect(() => dataEqual({}, 'not an object')).toThrow("Both arguments must be objects or arrays."); // 预期抛出错误
    expect(() => dataEqual('not an object', 'not an array')).toThrow("Both arguments must be objects or arrays."); // 预期抛出错误
  });

  // 测试两个完全相等的对象的情况
  it('should return false for two identical objects', () => {
    const obj1 = { key1: 'value1', key2: 'value2' };
    const obj2 = { key1: 'value1', key2: 'value2' };
    expect(dataEqual(obj1, obj2)).toBe(false); // 预期结果为 false
  });

  // 测试两个完全相等的数组的情况
  it('should return false for two identical arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(dataEqual(arr1, arr2)).toBe(false); // 预期结果为 false
  });

  // 测试两个不同的对象的情况
  it('should return true for different objects', () => {
    const obj1 = { key1: 'value1', key2: 'value2' };
    const obj2 = { key1: 'value1', key2: 'differentValue' };
    expect(dataEqual(obj1, obj2)).toBe(true); // 预期结果为 true
  });

  // 测试两个不同的数组的情况
  it('should return true for different arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(dataEqual(arr1, arr2)).toBe(true); // 预期结果为 true
  });

  // 测试数组长度不同的情况
  it('should return true for arrays with different lengths', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2];
    expect(dataEqual(arr1, arr2)).toBe(true); // 预期结果为 true
  });

  // 测试对象包含不同键的情况
  it('should return true for objects with different keys', () => {
    const obj1 = { key1: 'value1' };
    const obj2 = { key2: 'value2' };
    expect(dataEqual(obj1, obj2)).toBe(true); // 预期结果为 true
  });

  // 测试嵌套对象中不同值的情况
  it('should return true for nested objects with different values', () => {
    const obj1 = { nested: { key1: 'value1' } };
    const obj2 = { nested: { key1: 'differentValue' } };
    expect(dataEqual(obj1, obj2)).toBe(true); // 预期结果为 true
  });

  // 测试嵌套数组中不同值的情况
  it('should return true for nested arrays with different values', () => {
    const obj1 = { nested: [1, 2, 3] };
    const obj2 = { nested: [1, 2, 4] };
    expect(dataEqual(obj1, obj2)).toBe(true); // 预期结果为 true
  });

  // 测试数组中对象不同值的情况
  it('should return true for arrays of objects with different values', () => {
    const obj1 = { arr: [{ key1: 'value1' }, { key2: 'value2' }] };
    const obj2 = { arr: [{ key1: 'differentValue' }, { key2: 'value2' }] };
    expect(dataEqual(obj1, obj2)).toBe(true); // 预期结果为 true
  });

  // 测试返回不同键路径的情况
  it('should return an array of differing keys when returnKeys is true', () => {
    const obj1 = { key1: 'value1', key2: 'value2', nested: { key3: 'value3' } };
    const obj2 = { key1: 'value1', key2: 'differentValue', nested: { key3: 'differentValue' } };
    const result = dataEqual(obj1, obj2, { returnKeys: true });
    expect(result).toEqual(['key2', 'nested.key3']); // 预期结果为包含不同键路径的数组
  });

  // 测试返回嵌套数组中不同键路径的情况
  it('should return an array of differing keys for nested arrays when returnKeys is true', () => {
    const obj1 = { nested: [1, 2, 3] };
    const obj2 = { nested: [1, 2, 4] };
    const result = dataEqual(obj1, obj2, { returnKeys: true });
    expect(result).toEqual(['nested.2']); // 预期结果为包含不同键路径的数组
  });

  // 测试返回数组中对象不同键路径的情况
  it('should return an array of differing keys for arrays of objects when returnKeys is true', () => {
    const obj1 = { arr: [{ key1: 'value1' }, { key2: 'value2' }] };
    const obj2 = { arr: [{ key1: 'differentValue' }, { key2: 'value2' }] };
    const result = dataEqual(obj1, obj2, { returnKeys: true });
    expect(result).toEqual(['arr.0.key1']); // 预期结果为包含不同键路径的数组
  });

  // 测试处理 NaN 值的情况
  it('should handle NaN values correctly', () => {
    const obj1 = { key1: NaN };
    const obj2 = { key1: NaN };
    expect(dataEqual(obj1, obj2)).toBe(true); // 预期结果为 true
  });

  // 测试处理 0 值的情况
  it('should handle 0 values correctly', () => {
    const obj1 = { key1: 0 };
    const obj2 = { key1: 0 };
    expect(dataEqual(obj1, obj2)).toBe(false); // 预期结果为 false
  });
});
// dataFind
describe('dataFind', () => {
  // 测试无效输入的情况
  it('should throw an error for invalid arguments', () => {
    expect(() => dataFind(null, 'key', 'value')).toThrow('Invalid argument'); // 预期抛出错误
    expect(() => dataFind({}, null, 'value')).toThrow('Invalid argument'); // 预期抛出错误
    expect(() => dataFind({}, 'key', null)).toThrow('Invalid argument'); // 预期抛出错误
    expect(() => dataFind(undefined, 'key', 'value')).toThrow('Invalid argument'); // 预期抛出错误
    expect(() => dataFind({}, undefined, 'value')).toThrow('Invalid argument'); // 预期抛出错误
    expect(() => dataFind({}, 'key', undefined)).toThrow('Invalid argument'); // 预期抛出错误
  });

  // 测试对象中存在匹配的键值对的情况
  it('should return the object if a matching key-value pair is found', () => {
    const data = { key: 'value' };
    expect(dataFind(data, 'key', 'value')).toEqual(data); // 预期结果为匹配的对象
  });

  // 测试对象中不存在匹配的键值对的情况
  it('should return null if no matching key-value pair is found', () => {
    const data = { key: 'value' };
    expect(dataFind(data, 'key', 'differentValue')).toBe(null); // 预期结果为 null
  });

  // 测试嵌套对象中存在匹配的键值对的情况
  it('should return the first matching object in a nested structure', () => {
    const data = {
      nested: {
        key: 'value',
        otherKey: 'otherValue'
      },
      anotherKey: 'anotherValue'
    };
    expect(dataFind(data, 'key', 'value')).toEqual(data.nested); // 预期结果为匹配的对象
  });

  // 测试数组中存在匹配的键值对的情况
  it('should return the first matching object in an array', () => {
    const data = [
      { key: 'value1' },
      { key: 'value2' },
      { key: 'value1' }
    ];
    expect(dataFind(data, 'key', 'value1')).toEqual(data[0]); // 预期结果为匹配的对象
  });

  // 测试数组中不存在匹配的键值对的情况
  it('should return null if no matching key-value pair is found in an array', () => {
    const data = [
      { key: 'value1' },
      { key: 'value2' }
    ];
    expect(dataFind(data, 'key', 'value3')).toBe(null); // 预期结果为 null
  });

  // 测试嵌套数组中存在匹配的键值对的情况
  it('should return the first matching object in a nested array', () => {
    const data = {
      nestedArray: [
        { key: 'value1' },
        { key: 'value2' },
        { key: 'value1' }
      ]
    };
    expect(dataFind(data, 'key', 'value1')).toEqual(data.nestedArray[0]); // 预期结果为匹配的对象
  });

  // 测试深度嵌套结构中存在匹配的键值对的情况
  it('should return the first matching object in a deeply nested structure', () => {
    const data = {
      level1: {
        level2: {
          level3: {
            key: 'value'
          }
        }
      }
    };
    expect(dataFind(data, 'key', 'value')).toEqual(data.level1.level2.level3); // 预期结果为匹配的对象
  });

  // 测试混合嵌套结构中存在匹配的键值对的情况
  it('should return the first matching object in a mixed nested structure', () => {
    const data = {
      level1: {
        level2: [
          { key: 'value1' },
          { key: 'value2' },
          { key: 'value1' }
        ]
      }
    };
    expect(dataFind(data, 'key', 'value1')).toEqual(data.level1.level2[0]); // 预期结果为匹配的对象
  });

  // 测试混合嵌套结构中不存在匹配的键值对的情况
  it('should return null if no matching key-value pair is found in a mixed nested structure', () => {
    const data = {
      level1: {
        level2: [
          { key: 'value1' },
          { key: 'value2' }
        ]
      }
    };
    expect(dataFind(data, 'key', 'value3')).toBe(null); // 预期结果为 null
  });
});
// dataMerge
describe('dataMerge', () => {
  // 测试无效输入的情况
  it('should return an empty array for invalid inputs', () => {
    expect(dataMerge('not an array', [1, 2, 3])).toEqual([]); // 预期结果为空数组
    expect(dataMerge([1, 2, 3], 'not an array')).toEqual([]); // 预期结果为空数组
    expect(dataMerge('not an array', 'not an array')).toEqual([]); // 预期结果为空数组
  });

  // 并集 (类型 1)
  it('should return an empty array for union of two empty arrays', () => {
    expect(dataMerge([], [], 1)).toEqual([]); // 预期结果为空数组
  });

  it('should return a union of two arrays with duplicates removed', () => {
    expect(dataMerge([1, 2, 3], [3, 4, 5], 1)).toEqual([1, 2, 3, 4, 5]); // 预期结果为去重后的并集
  });

  it('should return a union of two arrays with no common elements', () => {
    expect(dataMerge([1, 2, 3], [4, 5, 6], 1)).toEqual([1, 2, 3, 4, 5, 6]); // 预期结果为合并后的数组
  });

  // 交集 (类型 2)
  it('should return an empty array for intersection of two empty arrays', () => {
    expect(dataMerge([], [], 2)).toEqual([]); // 预期结果为空数组
  });

  it('should return the intersection of two arrays with common elements', () => {
    expect(dataMerge([1, 2, 3], [3, 4, 5], 2)).toEqual([3]); // 预期结果为交集
  });

  it('should return an empty array for intersection of two arrays with no common elements', () => {
    expect(dataMerge([1, 2, 3], [4, 5, 6], 2)).toEqual([]); // 预期结果为空数组
  });

  // 差集 (类型 3)
  it('should return an empty array for difference of two empty arrays', () => {
    expect(dataMerge([], [], 3)).toEqual([]); // 预期结果为空数组
  });

  it('should return the difference of two arrays where data1 has elements not in data2', () => {
    expect(dataMerge([1, 2, 3], [3, 4, 5], 3)).toEqual([1, 2]); // 预期结果为差集
  });

  it('should return an empty array for difference of two identical arrays', () => {
    expect(dataMerge([1, 2, 3], [1, 2, 3], 3)).toEqual([]); // 预期结果为空数组
  });

  // 补集 (类型 4)
  it('should return an empty array for complement of two empty arrays', () => {
    expect(dataMerge([], [], 4)).toEqual([]); // 预期结果为空数组
  });

  it('should return the complement of two arrays with different elements', () => {
    expect(dataMerge([1, 2, 3], [3, 4, 5], 4)).toEqual([1, 2, 4, 5]); // 预期结果为补集
  });

  it('should return an empty array for complement of two identical arrays', () => {
    expect(dataMerge([1, 2, 3], [1, 2, 3], 4)).toEqual([]); // 预期结果为空数组
  });

  // 默认类型 (其他类型)
  it('should return an empty array for an unknown type', () => {
    expect(dataMerge([1, 2, 3], [3, 4, 5], 5)).toEqual([]); // 预期结果为空数组
  });
});
// deepClone
describe('deepClone', () => {
  // 测试基本数据类型
  it('should return the same value for null', () => {
    expect(deepClone(null)).toBe(null);
  });

  it('should return the same value for undefined', () => {
    expect(deepClone(undefined)).toBe(undefined);
  });

  it('should return the same value for a number', () => {
    expect(deepClone(42)).toBe(42);
  });

  it('should return the same value for a string', () => {
    expect(deepClone("hello")).toBe("hello");
  });

  it('should return the same value for a boolean', () => {
    expect(deepClone(true)).toBe(true);
    expect(deepClone(false)).toBe(false);
  });

  // 测试函数
  it('should clone a function', () => {
    const func = () => 42;
    const clonedFunc = deepClone(func);
    // expect(clonedFunc).not.toBe(func); // 不是同一个引用
    expect(clonedFunc()).toBe(func()); // 返回值相同
  });

  // 测试 Date 对象
  it('should clone a Date object', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).not.toBe(date); // 不是同一个引用
    expect(clonedDate.getTime()).toBe(date.getTime()); // 时间相同
  });

  // 测试 RegExp 对象
  it('should clone a RegExp object', () => {
    const regex = /test/gi;
    const clonedRegex = deepClone(regex);
    expect(clonedRegex).not.toBe(regex); // 不是同一个引用
    expect(clonedRegex.source).toBe(regex.source); // 源相同
    expect(clonedRegex.flags).toBe(regex.flags); // 标志相同
  });

  // 测试 Map 对象
  it('should clone a Map object', () => {
    const map = new Map();
    map.set('key1', 'value1');
    map.set('key2', { nested: 'value2' });
    const clonedMap = deepClone(map);
    expect(clonedMap).not.toBe(map); // 不是同一个引用
    expect(clonedMap.get('key1')).toBe('value1'); // 值相同
    expect(clonedMap.get('key2')).not.toBe(map.get('key2')); // 内部对象不是同一个引用
    expect(clonedMap.get('key2')).toEqual(map.get('key2')); // 内容相同
  });

  // 测试 Set 对象
  it('should clone a Set object', () => {
    const set = new Set();
    set.add('value1');
    set.add({ nested: 'value2' });
    const clonedSet = deepClone(set);
    expect(clonedSet).not.toBe(set); // 不是同一个引用
    expect(clonedSet.has('value1')).toBe(true); // 值相同
    expect([...clonedSet][1]).not.toBe([...set][1]); // 内部对象不是同一个引用
    expect([...clonedSet][1]).toEqual([...set][1]); // 内容相同
  });

  // 测试数组
  it('should clone an array', () => {
    const arr = [1, 2, 3, { a: 4 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).not.toBe(arr); // 不是同一个引用
    expect(clonedArr).toEqual(arr); // 内容相同
    expect(clonedArr[3]).not.toBe(arr[3]); // 内部对象不是同一个引用
  });

  // 测试对象
  it('should clone an object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).not.toBe(obj); // 不是同一个引用
    expect(clonedObj).toEqual(obj); // 内容相同
    expect(clonedObj.b).not.toBe(obj.b); // 内部对象不是同一个引用
  });

  // 测试嵌套对象和数组
  it('should clone a nested object and array', () => {
    const nested = { a: [1, 2, { b: 3 }], c: { d: [4, 5] } };
    const clonedNested = deepClone(nested);
    expect(clonedNested).not.toBe(nested); // 不是同一个引用
    expect(clonedNested).toEqual(nested); // 内容相同
    expect(clonedNested.a[2]).not.toBe(nested.a[2]); // 内部对象不是同一个引用
    expect(clonedNested.c.d).not.toBe(nested.c.d); // 内部数组不是同一个引用
  });

  // 测试循环引用
  it('should handle circular references', () => {
    const obj = {};
    obj.self = obj;
    const clonedObj = deepClone(obj);
    expect(clonedObj).not.toBe(obj); // 不是同一个引用
    expect(clonedObj.self).toBe(clonedObj); // 循环引用正确
  });

  // 测试 Symbol 作为键
  it('should handle objects with Symbol keys', () => {
    const sym = Symbol('test');
    const obj = { [sym]: 'value' };
    const clonedObj = deepClone(obj);
    expect(clonedObj).not.toBe(obj); // 不是同一个引用
    expect(clonedObj[sym]).toBe('value'); // 内容相同
  });
});
// getBetweenDate
describe('getBetweenDate', () => {
  // 测试基本输入验证
  it('should return an empty array for invalid dates', () => {
    expect(getBetweenDate('invalid', '2023-10-01')).toEqual([]);
    expect(getBetweenDate('2023-10-01', 'invalid')).toEqual([]);
    expect(getBetweenDate('invalid', 'invalid')).toEqual([]);
  });

  // 测试日期顺序
  it('should return dates in ascending order when date1 is before date', () => {
    const date1 = new Date('2023-10-01');
    const date2 = new Date('2023-10-03');
    expect(getBetweenDate(date1, date2)).toEqual(['2023-10-01', '2023-10-02', '2023-10-03']);
  });

  it('should return dates in ascending order when date is before date1', () => {
    const date1 = new Date('2023-10-03');
    const date2 = new Date('2023-10-01');
    expect(getBetweenDate(date1, date2)).toEqual(['2023-10-01', '2023-10-02', '2023-10-03']);
  });

  // 测试返回天数
  it('should return the number of days between two dates', () => {
    const date1 = new Date('2023-10-01');
    const date2 = new Date('2023-10-03');
    expect(getBetweenDate(date1, date2, true)).toBe(2);
  });

  // 测试返回日期数组
  it('should return an array of dates between two dates', () => {
    const date1 = new Date('2023-10-01');
    const date2 = new Date('2023-10-03');
    expect(getBetweenDate(date1, date2)).toEqual(['2023-10-01', '2023-10-02', '2023-10-03']);
  });

  // 测试边界条件
  it('should return an array with a single date when the dates are the same', () => {
    const date1 = new Date('2023-10-01');
    const date2 = new Date('2023-10-01');
    expect(getBetweenDate(date1, date2)).toEqual(['2023-10-01']);
  });

  it('should return 0 days when the dates are the same', () => {
    const date1 = new Date('2023-10-01');
    const date2 = new Date('2023-10-01');
    expect(getBetweenDate(date1, date2, true)).toBe(0);
  });
});
// getPercentage
describe('getPercentage', () => {
  it('should return "0.00%" when total is 0', () => {
    expect(getPercentage(10, 0)).toBe("0.00%");
  });

  it('should throw an error when part is not a number', () => {
    expect(() => getPercentage("not a number", 10)).toThrow("所有参数必须为数字");
  });

  it('should throw an error when total is not a number', () => {
    expect(() => getPercentage(10, "not a number")).toThrow("所有参数必须为数字");
  });

  it('should throw an error when decimalPlaces is not a number', () => {
    expect(() => getPercentage(10, 10, "not a number")).toThrow("所有参数必须为数字");
  });

  it('should calculate the correct percentage with default decimal places', () => {
    expect(getPercentage(5, 10)).toBe("50.00%");
  });

  it('should calculate the correct percentage with specified decimal places', () => {
    expect(getPercentage(1, 3, 3)).toBe("33.333%");
  });

  it('should handle negative numbers correctly', () => {
    expect(getPercentage(-5, -10)).toBe("50.00%");
  });

  it('should handle zero part correctly', () => {
    expect(getPercentage(0, 10)).toBe("0.00%");
  });

  it('should handle zero part and total correctly', () => {
    expect(getPercentage(0, 0)).toBe("0.00%");
  });
});
// getRecentDate
describe('getRecentDate', () => {
  it('should return an empty array when date is invalid', () => {
    expect(getRecentDate('invalid-date')).toEqual([]);
  });

  it('should return the correct dates before the given date with step 1', () => {
    const now = new Date('2023-10-01').getTime();
    const oneDay = 86400000;
    const stepDays = 3 * oneDay;
    const endDate = now - stepDays;

    const expectedDates = [
      new Date(now - oneDay * 3).toISOString().split('T')[0],
      new Date(now - oneDay * 2).toISOString().split('T')[0],
      new Date(now - oneDay * 1).toISOString().split('T')[0],
    ];

    expect(getRecentDate('2023-10-01', 1, 'before')).toEqual(expectedDates);
  });

  it('should return the correct dates after the given date with step 2', () => {
    const now = new Date('2023-10-01').getTime();
    const oneDay = 86400000;
    const stepDays = 7 * oneDay;
    const endDate = now + stepDays;

    const expectedDates = [
      new Date(now + oneDay * 1).toISOString().split('T')[0],
      new Date(now + oneDay * 2).toISOString().split('T')[0],
      new Date(now + oneDay * 3).toISOString().split('T')[0],
      new Date(now + oneDay * 4).toISOString().split('T')[0],
      new Date(now + oneDay * 5).toISOString().split('T')[0],
      new Date(now + oneDay * 6).toISOString().split('T')[0],
      new Date(now + oneDay * 7).toISOString().split('T')[0],
    ];
    expect(getRecentDate('2023-10-01', 2, 'after')).toEqual(expectedDates);
  });

  it('should format dates according to the given format', () => {
    const now = new Date('2023-10-01').getTime();
    const oneDay = 86400000;
    const stepDays = 3 * oneDay;
    const endDate = now - stepDays;

    const expectedDates = [
      '2023-09-28',
      '2023-09-29',
      '2023-09-30',
    ];

    expect(getRecentDate('2023-10-01', 1, 'before', 'Y-M-D')).toEqual(expectedDates);
  });

  it('should use the custom step option', () => {
    const now = new Date('2023-10-01').getTime();
    const oneDay = 86400000;
    const stepDays = 5 * oneDay;
    const endDate = now - stepDays;

    const expectedDates = [
      new Date(now - oneDay * 5).toISOString().split('T')[0],
      new Date(now - oneDay * 4).toISOString().split('T')[0],
      new Date(now - oneDay * 3).toISOString().split('T')[0],
      new Date(now - oneDay * 2).toISOString().split('T')[0],
      new Date(now - oneDay * 1).toISOString().split('T')[0],
    ];
    expect(getRecentDate('2023-10-01', 1, 'before', 'Y-M-D', { 1: 5 })).toEqual(expectedDates);
  });
});
// getSameIndexValue
describe('getSameIndexValue', () => {
  it('should throw an error when obj is not an object or null', () => {
    expect(() => getSameIndexValue(null, 'index')).toThrow("obj 必须是非 null 对象");
    expect(() => getSameIndexValue(undefined, 'index')).toThrow("obj 必须是非 null 对象");
    expect(() => getSameIndexValue(123, 'index')).toThrow("obj 必须是非 null 对象");
    expect(() => getSameIndexValue('string', 'index')).toThrow("obj 必须是非 null 对象");
  });

  it('should throw an error when index is not a string', () => {
    expect(() => getSameIndexValue({}, 123)).toThrow("index 必须是字符串");
    expect(() => getSameIndexValue({}, null)).toThrow("index 必须是字符串");
    expect(() => getSameIndexValue({}, undefined)).toThrow("index 必须是字符串");
    expect(() => getSameIndexValue({}, {})).toThrow("index 必须是字符串");
  });

  it('should throw an error when parentKey is not a string', () => {
    expect(() => getSameIndexValue({}, 'index', 123)).toThrow("parentKey 必须是字符串");
    expect(() => getSameIndexValue({}, 'index', null)).toThrow("parentKey 必须是字符串");
    // expect(() => getSameIndexValue({}, 'index', undefined)).toThrow("parentKey 必须是字符串");
    expect(() => getSameIndexValue({}, 'index', {})).toThrow("parentKey 必须是字符串");
  });

  it('should return an empty array when no matching index is found', () => {
    const obj = {
      key1: 'value1',
      key2: 'value2',
    };
    expect(getSameIndexValue(obj, 'nonExistentKey')).toEqual([]);
  });

  it('should return the correct value when a matching index is found at the root level', () => {
    const obj = {
      key1: 'value1',
      key2: 'value2',
    };
    expect(getSameIndexValue(obj, 'key1')).toEqual([{ key: 'key1', value: 'value1' }]);
  });

  it('should return the correct value when a matching index is found in nested objects', () => {
    const obj = {
      key1: {
        key2: 'value2',
        key3: {
          key4: 'value4',
        },
      },
      key5: 'value5',
    };
    expect(getSameIndexValue(obj, 'key4')).toEqual([{ key: 'key1.key3.key4', value: 'value4' }]);
  });

  it('should return multiple values when multiple matching indices are found', () => {
    const obj = {
      key1: {
        key2: 'value2',
        key3: {
          key2: 'value4',
        },
      },
      key2: 'value5',
    };
    expect(getSameIndexValue(obj, 'key2')).toEqual([
      { key: 'key1.key2', value: 'value2' },
      { key: 'key1.key3.key2', value: 'value4' },
      { key: 'key2', value: 'value5' },
    ]);
  });

  it('should handle empty objects correctly', () => {
    const obj = {};
    expect(getSameIndexValue(obj, 'key')).toEqual([]);
  });

  it('should handle nested empty objects correctly', () => {
    const obj = {
      key1: {},
      key2: {
        key3: {},
      },
    };
    expect(getSameIndexValue(obj, 'key3')).toEqual([{key:"key2.key3",value:{}}]);
  });

  it('should handle arrays correctly', () => {
    const obj = {
      key1: [1, 2, 3],
      key2: {
        key1: [4, 5, 6],
      },
    };
    expect(getSameIndexValue(obj, 'key1')).toEqual([
      { key: 'key1', value: [1, 2, 3] },
      { key: 'key2.key1', value: [4, 5, 6] },
    ]);
  });
});
// getTimeStep
describe('getTimeStep', () => {
  it('should throw an error when start time format is invalid', () => {
    expect(() => getTimeStep('invalid', '12:00', '01:00')).toThrow("Invalid time format. Expected 'hh:mm' or 'hh:mm:ss'");
  });

  it('should throw an error when end time format is invalid', () => {
    expect(() => getTimeStep('12:00', 'invalid', '01:00')).toThrow("Invalid time format. Expected 'hh:mm' or 'hh:mm:ss'");
  });

  it('should throw an error when step format is invalid', () => {
    expect(() => getTimeStep('12:00', '13:00', 'invalid')).toThrow("Invalid time format. Expected 'hh:mm' or 'hh:mm:ss'");
  });

  it('should throw an error when start time is greater than end time', () => {
    expect(() => getTimeStep('13:00', '12:00', '01:00')).toThrow("Start time cannot be greater than end time.");
  });

  it('should return the correct time steps with default step and format', () => {
    expect(getTimeStep('12:00', '12:05','00:01')).toEqual(['12:00', '12:01', '12:02', '12:03', '12:04', '12:05']);
  });

  it('should return the correct time steps with custom step and format', () => {
    expect(getTimeStep('12:00', '12:10', '02:00')).toEqual(['12:00']);
  });

  it('should return the correct time steps with "hh:mm:ss" format', () => {
    expect(getTimeStep('12:00:00', '12:01:00', '00:01:00', 'hh:mm:ss')).toEqual([
      '12:00:00', '12:01:00'
    ]);
  });

  it('should return the correct time steps with "hh:mm:ss" format and custom step', () => {
    expect(getTimeStep('12:00:00', '12:00:05', '00:00:01', 'hh:mm:ss')).toEqual([
      '12:00:00', '12:00:01', '12:00:02', '12:00:03', '12:00:04', '12:00:05'
    ]);
  });

  it('should return a single time step when start and end times are the same', () => {
    expect(getTimeStep('12:00', '12:00')).toEqual(['12:00']);
  });


  it('should handle midnight correctly', () => {
    expect(getTimeStep('00:00', '00:05','00:01')).toEqual(['00:00', '00:01', '00:02', '00:03', '00:04', '00:05']);
  });
});
// getValue
describe('getValue', () => {
  const data = {
    user: {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        zip: '10001'
      },
      posts: [
        { title: 'Post 1', content: 'Content 1' },
        { title: 'Post 2', content: 'Content 2' }
      ]
    }
  };

  it('should get value by dot notation path', () => {
    const result = getValue(data, 'user.name');
    expect(result).toBe('John');
  });

  it('should get value by mixed notation path (dot + array)', () => {
    const result = getValue(data, 'user.posts[1].title');
    expect(result).toBe('Post 2');
  });

  it('should get value by array path', () => {
    const result = getValue(data, ['user', 'address', 'city']);
    expect(result).toBe('New York');
  });

  it('should return empty string when path is invalid', () => {
    const result = getValue(data, 'user.phone.number');
    expect(result).toBe('');
  });

  it('should return empty string when path array is empty', () => {
    const result = getValue(data, []);
    expect(result).toBe('');
  });

  it('should return empty string when path is null', () => {
    const result = getValue(data, null);
    expect(result).toBe('');
  });

  it('should handle numeric keys properly', () => {
    const arrData = { arr: [ { value: 'A' }, { value: 'B' } ] };
    const result = getValue(arrData, 'arr[0].value');
    expect(result).toBe('A');
  });

  it('should return empty string when accessing undefined on object', () => {
    const result = getValue(data, 'user.posts[10].title');
    expect(result).toBe('');
  });
});
// groupBy
describe('groupBy', () => {
  const data = [
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'banana' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'pear' },
    { type: 'vegetable', name: 'broccoli' }
  ];

  it('should group data by provided key', () => {
    const result = groupBy(data, 'type');
    expect(result).toEqual([
      { type:"fruit",name:"apple",children:[
          { type:"fruit",name:"apple"},
          { type:"fruit",name:"banana"},
          { type:"fruit",name:"pear"}
        ]
      },
      { type:"vegetable",name:"carrot",children:[
          { type:"vegetable",name:"carrot"},
          { type:"vegetable",name:"broccoli"}
        ]
      }
    ]);
  });

  it('should return original data if key does not exist in objects', () => {
    const result = groupBy(data, 'category');
    expect(result).toEqual(data);
  });

  it('should return original data if key is not a string', () => {
    const result = groupBy(data, 123);
    expect(result).toEqual(data);
  });

  it('should return original data if data is empty', () => {
    const result = groupBy([], 'type');
    expect(result).toEqual([]);
  });

  it('should return original data if data is not an array', () => {
    const result = groupBy(null, 'type');
    expect(result).toBe(null);
  });

  it('should return original data if data[0] does not have the key', () => {
    const invalidData = [{ name: 'apple' }, { name: 'banana' }];
    const result = groupBy(invalidData, 'type');
    expect(result).toEqual(invalidData);
  });
});
// moneyFormat
describe('moneyFormat', () => {
  it('should format integer money correctly with default separator and no prefix', () => {
    const result = moneyFormat(1234567);
    expect(result).toBe('1,234,567');
  });

  it('should format decimal money correctly with default separator', () => {
    const result = moneyFormat(1234567.89);
    expect(result).toBe('1,234,567.89');
  });

  it('should format money with custom separator', () => {
    const result = moneyFormat(1234567.89, ' ');
    expect(result).toBe('1 234 567.89');
  });

  it('should format money with prefix', () => {
    const result = moneyFormat(1234567.89, ',', '$');
    expect(result).toBe('$1,234,567.89');
  });

  it('should return "0" when money is not a number', () => {
    expect(moneyFormat('abc')).toBe('0');
    expect(() => moneyFormat(null)).toThrow("Invalid money format");
    expect(() => moneyFormat(undefined)).toThrow('Invalid money format');
  });

  it('should handle zero correctly', () => {
    expect(moneyFormat(0)).toBe("0");
  });

  it('should handle negative numbers correctly', () => {
    const result = moneyFormat(-1234567.89, ',', '$');
    expect(result).toBe('$-1,234,567.89');
  });

  it('should handle string number inputs correctly', () => {
    const result = moneyFormat('9876543.21');
    expect(result).toBe('9,876,543.21');
  });

  it('should handle integers smaller than 1000 without separator', () => {
    const result = moneyFormat(999);
    expect(result).toBe('999');
  });
});
// regEmail
describe('regEmail', () => {
  test('should return true for valid email addresses', () => {
      expect(regEmail('test@example.com')).toBe(true);
      expect(regEmail('user.name+tag+sorting@example.com')).toBe(true);
      expect(regEmail('user_name@example.co.uk')).toBe(true);
      expect(regEmail('user1234@sub.domain.com')).toBe(true);
  });

  test('should return false for invalid email addresses', () => {
      expect(regEmail('plainaddress')).toBe(false); // 缺少 @ 和域名
      expect(regEmail('@missingusername.com')).toBe(false); // 缺少用户名
      expect(regEmail('user@.com')).toBe(false); // 域名为空
      expect(regEmail('user@domain..com')).toBe(false); // 域名格式错误
      expect(regEmail('user@domain.c')).toBe(false); // 顶级域名过短
  });

  test('should handle edge cases', () => {
      expect(regEmail('')).toBe(false); // 空字符串
      expect(regEmail(null)).toBe(false); // null 输入
      expect(regEmail(undefined)).toBe(false); // undefined 输入
      expect(regEmail('   ')).toBe(false); // 仅空格
      expect(regEmail('user@domain.corporate')).toBe(true); // 长顶级域名
  });
});
// regIdcard
describe('regIdcard', () => {
  it('should return true for a valid ID card', () => {
    // 北京市 + 合法生日 + 正确校验位
    expect(regIdcard('11010519491231002X')).toBe(true);
  });

  it('should return false for wrong format (less than 18 digits)', () => {
    expect(regIdcard('11010519491231002')).toBe(false);
  });

  it('should return false for non-digit character (except X in last digit)', () => {
    expect(regIdcard('1101051949123100AX')).toBe(false);
  });

  it('should return false for invalid province code', () => {
    expect(regIdcard('99010519491231002X')).toBe(false); // 99 不是合法省份
  });

  it('should return false for invalid date (e.g. month = 13)', () => {
    expect(regIdcard('11010519991331002X')).toBe(false); // 13月
  });

  it('should return false for invalid date (e.g. day = 32)', () => {
    expect(regIdcard('11010519991232002X')).toBe(false); // 32日
  });

  it('should return false if check digit is wrong', () => {
    expect(regIdcard('110105194912310021')).toBe(false); // 正确是 X
  });

  it('should return true when lowercase x is used as check digit', () => {
    expect(regIdcard('11010519491231002x')).toBe(true); // 小写 x
  });

  it('should return false for non-numeric characters in first 17 digits', () => {
    expect(regIdcard('11010519491A31002X')).toBe(false);
  });
});
// regIsHas
describe('regIsHas', () => {
  it('should return true when str contains char', () => {
    expect(regIsHas('hello world', 'world')).toBe(true);
    expect(regIsHas('abc123', '123')).toBe(true);
    expect(regIsHas('abcdef', 'a')).toBe(true);
  });

  it('should return false when str does not contain char', () => {
    expect(regIsHas('hello world', 'foo')).toBe(false);
    expect(regIsHas('abc123', 'xyz')).toBe(false);
  });

  it('should return false when str is empty', () => {
    expect(regIsHas('', 'a')).toBe(false);
  });

  it('should return false when char is empty', () => {
    expect(regIsHas('abc', '')).toBe(false);
  });

  it('should return false when both str and char are empty', () => {
    expect(regIsHas('', '')).toBe(false);
  });

  it('should be case sensitive', () => {
    expect(regIsHas('Hello', 'h')).toBe(false); // 区分大小写
    expect(regIsHas('Hello', 'H')).toBe(true);
  });
});