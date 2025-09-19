const { strReplace } = require("../dist/zztool.umd.js");

describe("strReplace", () => {
  test("正常替换", () => {
    expect(strReplace("123456789", 3, 6)).toBe("123***789");
  });

  test("替换字符自定义", () => {
    expect(strReplace("abcdefg", 2, 5, "#")).toBe("ab###fg");
  });

  test("起始位置为 0", () => {
    expect(strReplace("abcdef", 0, 3)).toBe("***def");
  });

  test("结束位置超过字符串长度", () => {
    expect(strReplace("abcdef", 3, 10)).toBe("abc***");
  });

  test("start >= end 或 start < 0", () => {
    expect(strReplace("abcdef", 3, 3)).toBe("abcdef");
    expect(strReplace("abcdef", -1, 2)).toBe("abcdef");
  });

  test("非整数 start/end", () => {
    expect(strReplace("abcdef", 1.5, 4)).toBe("abcdef");
    expect(strReplace("abcdef", 1, 3.2)).toBe("abcdef");
  });

  test("空字符串或 null/undefined", () => {
    expect(strReplace("", 0, 1)).toBe("");
    expect(strReplace(null, 0, 1)).toBe(null);
    expect(strReplace(undefined, 0, 1)).toBe(undefined);
  });

  test("完整替换整个字符串", () => {
    expect(strReplace("12345", 0, 5)).toBe("*****");
  });

  test("start=0, end=1", () => {
    expect(strReplace("abc", 0, 1)).toBe("*bc");
  });
});