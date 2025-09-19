const { getValue } = require("../dist/zztool.umd.js");



describe("getValue", () => {
  const obj = {
    a: {
      b: {
        c: "d",
        arr: [
          { x: 1 },
          { x: 2 }
        ]
      }
    },
    empty: null,
    undef: undefined
  };

  test("普通字符串路径获取值", () => {
    expect(getValue(obj, "a.b.c")).toBe("d");
  });

  test("数组下标路径获取值", () => {
    expect(getValue(obj, "a.b.arr[0].x")).toBe(1);
    expect(getValue(obj, "a.b.arr[1].x")).toBe(2);
  });

  test("数组形式路径获取值", () => {
    expect(getValue(obj, ["a", "b", "c"])).toBe("d");
    expect(getValue(obj, ["a", "b", "arr", 0, "x"])).toBe(1);
  });

  test("路径不存在 => 返回空字符串", () => {
    expect(getValue(obj, "a.b.d")).toBe("");
    expect(getValue(obj, "a.b.arr[2].x")).toBe("");
    expect(getValue(obj, ["a", "b", "d"])).toBe("");
  });

  test("空路径或非法路径 => 返回空字符串", () => {
    expect(getValue(obj, "")).toBe("");
    expect(getValue(obj, [])).toBe("");
    expect(getValue(obj, null)).toBe("");
    expect(getValue(obj, undefined)).toBe("");
  });

  test("访问 null 或 undefined 的值 => 返回空字符串", () => {
    expect(getValue(obj, "empty.prop")).toBe("");
    expect(getValue(obj, "undef.prop")).toBe("");
  });
});