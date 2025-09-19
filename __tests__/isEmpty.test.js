const { isEmpty } = require("../dist/zztool.umd.js");

describe("isEmpty", () => {
  const obj = {
    a: "",
    b: null,
    c: undefined,
    d: {},
    e: [],
    f: {
      f1: "",
      f2: []
    },
    g: {
      g1: {
        g2: null
      }
    },
    h: 0, // 不为空
    i: false // 不为空
  };

  test("默认返回布尔值", () => {
    expect(isEmpty(obj)).toBe(true); // 除 h、i 外都是空
  });

  test("返回空值路径", () => {
    const result = isEmpty(obj, { returnKeys: true });
    expect(result).toContain("a");
    expect(result).toContain("b");
    expect(result).toContain("c");
    expect(result).toContain("d");
    expect(result).toContain("e");
    expect(result).toContain("f.f1");
    expect(result).toContain("f.f2");
    expect(result).toContain("g.g1.g2");
    expect(result).not.toContain("h");
    expect(result).not.toContain("i");
  });

  test("忽略指定字段", () => {
    const result = isEmpty(obj, { returnKeys: true, ignoreKeys: ["a", "b", "f.f1"] });
    expect(result).not.toContain("a");
    expect(result).not.toContain("b");
    expect(result).not.toContain("f.f1");
    expect(result).toContain("c");
    expect(result).toContain("d");
  });

  test("自定义空值判断函数", () => {
    const checkEmptyFn = (val) => val === null || val === undefined;
    const result = isEmpty(obj, { returnKeys: true, checkEmptyFn });
    expect(result).toContain("b");
    expect(result).toContain("c");
    expect(result).not.toContain("a"); // "" 不算空
    expect(result).not.toContain("d"); // {} 不算空
  });

  test("最大递归深度限制", () => {
    const result = isEmpty(obj, { returnKeys: true, maxDepth: 2 });
    expect(result).toContain("a");
    expect(result).toContain("b");
    expect(result).toContain("c");
    expect(result).toContain("d");
    expect(result).toContain("e");
    expect(result).toContain("f.f1");
    expect(result).toContain("f.f2");
    expect(result).not.toContain("g.g1.g2"); // 超过深度
  });

  test("空数组或空对象返回 false", () => {
    expect(isEmpty([])).toBe(false);
    expect(isEmpty({})).toBe(false);
  });
});