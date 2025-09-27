const { moneyFormat } = require("../dist/zztool.umd.js");

describe("moneyFormat", () => {
  test("默认格式化金额（千分位逗号分隔）", () => {
    expect(moneyFormat(123456789)).toBe("123,456,789");
    expect(moneyFormat("123456789")).toBe("123,456,789");
  });

  test("自定义分隔符", () => {
    expect(moneyFormat(123456789, "~")).toBe("123~456~789");
    expect(moneyFormat("123456789", "-")).toBe("123-456-789");
  });

  test("首字符添加前缀", () => {
    expect(moneyFormat(123456789, ",", "￥")).toBe("￥123,456,789");
    expect(moneyFormat("123456789", "~", "$")).toBe("$123~456~789");
  });

  test("带小数金额格式化", () => {
    expect(moneyFormat(1234567.89)).toBe("1,234,567.89");
    expect(moneyFormat("1234567.89", " ")).toBe("1 234 567.89");
    expect(moneyFormat(1234567.8)).toBe("1,234,567.8");
  });

  test("金额为 0 或 '0'", () => {
    expect(moneyFormat(0)).toBe("0");
    expect(moneyFormat("0")).toBe("0");
  });

  test("非数字字符串返回 '0'", () => {
    expect(moneyFormat("abc")).toBe("0");
    expect(moneyFormat("")).toBe("0");
  });

  test("金额为负数", () => {
    expect(moneyFormat(-1234567)).toBe("-1,234,567");
    expect(moneyFormat("-1234567.89")).toBe("-1,234,567.89");
  });

  test("金额为小于 1000 的数字", () => {
    expect(moneyFormat(123)).toBe("123");
    expect(moneyFormat(12.34)).toBe("12.34");
    expect(moneyFormat("5")).toBe("5");
  });

  test("金额为 null 或 undefined 或非数字类型抛错", () => {
    expect(() => moneyFormat(null)).toThrow();
    expect(() => moneyFormat(undefined)).toThrow();
    expect(() => moneyFormat({})).toThrow();
    expect(() => moneyFormat([])).toThrow();
  });
});