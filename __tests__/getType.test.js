const { getType } = require("../dist/zztool.umd.js");


describe("getType", () => {
  test("基础类型", () => {
    expect(getType(1)).toBe("number");
    expect(getType("hello")).toBe("string");
    expect(getType(true)).toBe("boolean");
    expect(getType(undefined)).toBe("undefined");
    expect(getType(null)).toBe("null");
    expect(getType(Symbol("s"))).toBe("symbol");
  });

  test("对象和数组", () => {
    expect(getType({})).toBe("object");
    expect(getType({ a: 1 })).toBe("object");
    expect(getType([])).toBe("array");
    expect(getType([1, 2, 3])).toBe("array");
  });

  test("函数类型", () => {
    expect(getType(function () {})).toBe("function");
    expect(getType(() => {})).toBe("function");
  });

  test("特殊对象", () => {
    expect(getType(new Date())).toBe("date");
    expect(getType(/abc/)).toBe("regexp");
    expect(getType(new Map())).toBe("map");
    expect(getType(new Set())).toBe("set");
    expect(getType(new WeakMap())).toBe("weakmap");
    expect(getType(new WeakSet())).toBe("weakset");
  });

  test("其他类型", () => {
    expect(getType(new Error())).toBe("error");
    expect(getType(Promise.resolve())).toBe("promise");
  });
});