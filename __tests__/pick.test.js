const { pick } = require("../dist/zztool.umd.js");

describe("pick", () => {
  const data = {
    a: {
      b: {
        c: 1,
        d: 2
      },
      c: 3
    },
    c: 4,
    e: null,
    f: { g: { c: 5 } }
  };

  test("查找单个深层属性", () => {
    const result = pick(data, "d");
    expect(result).toEqual([{ key: "a.b.d", value: 2 }]);
  });

  test("查找多个同名属性", () => {
    const result = pick(data, "c");
    expect(result).toEqual([
      { key: "c", value: 4 },
      { key: "f.g.c", value: 5 },
      { key: "a.c", value: 3 },
      { key: "a.b.c", value: 1 },
    ]);
  });

  test("查找不存在的属性", () => {
    const result = pick(data, "x");
    expect(result).toEqual([]);
  });

  test("处理 null 值对象", () => {
    const result = pick(data, "e");
    expect(result).toEqual([{ key: "e", value: null }]);
  });
  // 已经移除第三个参数
  // test("使用 parentKey 前缀", () => {
  //   const result = pick(data, "c", "root");
  //   expect(result).toEqual([
  //     { key: "root.a.b.c", value: 1 },
  //     { key: "root.a.c", value: 3 },
  //     { key: "root.c", value: 4 },
  //     { key: "root.f.g.c", value: 5 }
  //   ]);
  // });

  test("非对象参数抛错", () => {
    expect(() => pick(null, "c")).toThrow();
    expect(() => pick(123, "c")).toThrow();
  });

  test("index 非字符串抛错", () => {
    expect(() => pick(data, 123)).toThrow();
  });

  // test("parentKey 非字符串抛错", () => {
  //   expect(() => pick(data, "c", 123)).toThrow();
  // });
});