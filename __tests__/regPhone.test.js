const { regPhone } = require("../dist/zztool.umd.js");

describe("regPhone 函数测试", () => {
  test("合法手机号", () => {
    expect(regPhone("13812345678")).toBe(true);
    expect(regPhone("14712345678")).toBe(true);
    expect(regPhone("15912345678")).toBe(true);
    expect(regPhone("17812345678")).toBe(true);
    expect(regPhone("18612345678")).toBe(true);
    expect(regPhone("19912345678")).toBe(true);
  });

  test("非法手机号", () => {
    expect(regPhone("")).toBe(false);
    expect(regPhone("12345678901")).toBe(false); // 不以 1 开头
    expect(regPhone("23812345678")).toBe(false); // 以 2 开头
    expect(regPhone("1381234567")).toBe(false); // 少一位
    expect(regPhone("138123456789")).toBe(false); // 多一位
    expect(regPhone("1381234567a")).toBe(false); // 包含非数字字符
  });

  test("非字符串类型输入", () => {
    expect(regPhone(13812345678)).toBe(false);
    expect(regPhone(null)).toBe(false);
    expect(regPhone(undefined)).toBe(false);
    expect(regPhone({})).toBe(false);
  });
});