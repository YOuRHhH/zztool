const { deepClone } = require("../dist/zztool.umd.js");

describe('deepClone',() => {
  // 暂时不加入测试function
  test("基础类型", () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone("hello")).toBe("hello");
    expect(deepClone(null)).toBeNull();
    expect(deepClone(undefined)).toBeUndefined();
    expect(deepClone(true)).toBe(true);
  });

  test("日期", () => {
    const date = new Date();
    const cloned = deepClone(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
  });

  test("正则", () => {
    const reg = /test/gi;
    const cloned = deepClone(reg);
    expect(cloned.source).toBe(reg.source);
    expect(cloned.flags).toBe(reg.flags);
    expect(cloned).not.toBe(reg);
  });

  test("Map", () => {
    const map = new Map([
      ["a", 1],
      ["b", { c: 2 }],
    ]);
    const cloned = deepClone(map);

    expect(cloned).not.toBe(map);
    expect(cloned.get("a")).toBe(1);
    expect(cloned.get("b")).toEqual({ c: 2 });
    expect(cloned.get("b")).not.toBe(map.get("b"));
  });

  test("Set", () => {
    const set = new Set([1, { a: 2 }]);
    const cloned = deepClone(set);

    expect(cloned).not.toBe(set);
    expect(cloned.has(1)).toBe(true);

    const originalObj = [...set][1];
    const clonedObj = [...cloned][1];
    expect(clonedObj).toEqual(originalObj);
    expect(clonedObj).not.toBe(originalObj);
  });

  test("对象和数组", () => {
    const sym = Symbol("key");
    const obj = {
      a: 1,
      b: [2, 3],
      [sym]: "symbolValue",
    };

    const cloned = deepClone(obj);

    expect(cloned).not.toBe(obj);
    expect(cloned.a).toBe(1);
    expect(cloned.b).toEqual([2, 3]);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned[sym]).toBe("symbolValue");
  });

  test("循环引用", () => {
    const obj = { a: 1 };
    obj.self = obj; // 循环引用

    const cloned = deepClone(obj);

    expect(cloned).not.toBe(obj);
    expect(cloned.a).toBe(1);
    expect(cloned.self).toBe(cloned); // 循环关系保持
  });
})