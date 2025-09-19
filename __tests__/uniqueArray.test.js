const { uniqueArray } = require("../dist/zztool.umd.js");

describe("uniqueArray", () => {
  test("普通数字数组去重", () => {
    const arr = [1, 2, 3, 2, 1];
    expect(uniqueArray(arr)).toEqual([1, 2, 3]);
  });

  test("字符串数组去重", () => {
    const arr = ["a", "b", "a", "c"];
    expect(uniqueArray(arr)).toEqual(["a", "b", "c"]);
  });

  test("混合类型数组去重", () => {
    const arr = [1, "1", 2, "2", 1, "1"];
    expect(uniqueArray(arr)).toEqual([1, "1", 2, "2"]);
  });

  test("空数组返回空数组", () => {
    expect(uniqueArray([])).toEqual([]);
  });

  test("非数组输入直接返回原值", () => {
    expect(uniqueArray(null)).toBeNull();
    expect(uniqueArray(undefined)).toBeUndefined();
    expect(uniqueArray("string")).toBe("string");
    expect(uniqueArray(123)).toBe(123);
  });

  test("对象数组只去重引用而非内容", () => {
    const a = { id: 1 }, b = { id: 2 }, c = { id: 1 };
    expect(uniqueArray([a, b, a, c])).toEqual([a, b, c]); // 注意 a 和 c 内容相同但不同引用
  });
});
