const { getChar } = require("../dist/zztool.umd.js");

describe("getChar", () => {
  test("getChar", () => {
    expect(getChar("hello world", 0, 5)).toBe("hello");
  });
  test("getChar", () => {
    expect(getChar("hello world", 6, 11)).toBe("world");
  });
  test("getChar", () => {
    expect(getChar("hello world", 0, 11)).toBe("hello world");
  });
});