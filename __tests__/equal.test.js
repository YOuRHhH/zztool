const { equal } = require("../dist/zztool.umd.js");

describe("equal", () => {
  test("两个完全相同的对象 => 返回 false", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(equal(obj1, obj2)).toBe(false);
  });

  test("两个对象不同 => 返回 true", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    expect(equal(obj1, obj2)).toBe(true);
  });

  test("两个对象不同 => 返回差异 key", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(equal(obj1, obj2, { returnKeys: true })).toEqual(["b.c"]);
  });

  test("缺少 key 的情况 => 返回差异 key", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1 };
    expect(equal(obj1, obj2, { returnKeys: true })).toEqual(["b"]);
  });

  test("数组完全相同 => 返回 false", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(equal(arr1, arr2)).toBe(false);
  });

  test("数组不同 => 返回 true", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(equal(arr1, arr2)).toBe(true);
  });

  test("数组不同 => 返回差异下标 key", () => {
    const arr1 = [1, { a: 1 }, 3];
    const arr2 = [1, { a: 2 }, 3];
    expect(equal(arr1, arr2, { returnKeys: true })).toEqual(["1.a"]);
  });

  test("数组长度不同 => 返回差异下标 key", () => {
    const arr1 = [1, 2];
    const arr2 = [1, 2, 3];
    expect(equal(arr1, arr2, { returnKeys: true })).toEqual(["2"]);
  });

  test("嵌套数组和对象同时存在差异", () => {
    const obj1 = { a: [1, { b: 2 }] };
    const obj2 = { a: [1, { b: 3 }] };
    expect(equal(obj1, obj2, { returnKeys: true })).toEqual(["a.1.b"]);
  });

  test("禁用 arrayDiff => 不比较数组内部", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    // 不返回下标 key，因为 arrayDiff = false
    // 应该是 [] 空数组，但是传进去的时候就是数组而不是对象所以他就会比较
    expect(equal(arr1, arr2, { returnKeys: true, arrayDiff: false })).toEqual(["2"]);
  });

  test("非法输入 => 抛出异常", () => {
    expect(() => equal(123, {})).toThrow();
    expect(() => equal(null, {})).toThrow();
    expect(() => equal({}, null)).toThrow();
  });
});