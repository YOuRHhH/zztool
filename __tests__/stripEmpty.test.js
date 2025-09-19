const { stripEmpty } = require("../dist/zztool.umd.js");

describe("stripEmpty", () => {
  test("基本对象过滤", () => {
    const obj = { a: 1, b: "", c: null, d: undefined };
    expect(stripEmpty({ ...obj })).toEqual({ a: 1 });
  });

  test("嵌套对象过滤", () => {
    const obj = { a: 1, z: { a: 1, b: "", xx: {}, zz: [] } };
    expect(stripEmpty({ ...obj })).toEqual({ a: 1, z: { a: 1 } });
  });

  test("数组过滤 - 默认 filterArray = true", () => {
    const obj = { arr: [1, "", null, 2, []] };
    expect(stripEmpty({ ...obj })).toEqual({ arr: [1, 2] });
  });

  test("数组不过滤 - filterArray = false", () => {
    const obj = { arr: [1, "", null, 2, []] };
    expect(stripEmpty({ ...obj }, { filterArray: false })).toEqual({ arr: [1, "", null, 2, []] });
  });

  test("自定义 checkEmptyFn", () => {
    const obj = { a: 1, b: 0, c: false };
    const checkEmptyFn = (val) => val === 0;
    expect(stripEmpty({ ...obj }, { checkEmptyFn })).toEqual({ a: 1, c: false });
  });

  test("多层数组嵌套对象过滤", () => {
    const obj = { arr: [{ a: "", b: 2 }, { a: 1, b: "" }] };
    expect(stripEmpty({ ...obj })).toEqual({ arr: [{ b: 2 }, { a: 1 }] });
  });

  test("空对象或非对象直接返回原值", () => {
    expect(stripEmpty(null)).toBeNull();
    expect(stripEmpty(undefined)).toBeUndefined();
    expect(stripEmpty(123)).toBe(123);
    expect(stripEmpty("abc")).toBe("abc");
  });
});