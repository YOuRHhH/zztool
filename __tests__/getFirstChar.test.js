const { getFirstChar } = require("../dist/zztool.umd.js");

describe("getFirstChar", () => {
  test("getFirstChar", () => {
    expect(getFirstChar("张三")).toBe("张");
    expect(getFirstChar("abc")).toBe("a");
  });
  test("非法抛出", () => {
    expect(getFirstChar(456)).toBe('');
    expect(getFirstChar({})).toBe('');
    expect(getFirstChar([])).toBe('');
  })
});