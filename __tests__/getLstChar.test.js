const { getLastChar } = require("../dist/zztool.umd.js");

describe("getLastChar", () => {
  test("getLastChar", () => {
    expect(getLastChar("张三")).toBe("三");
    expect(getLastChar("abc")).toBe("c");
  });
  test("非法抛出", () => {
    expect(getLastChar(456)).toBe('');
    expect(getLastChar({})).toBe('');
    expect(getLastChar([])).toBe('');
  })
});