const { getPercentage } = require("../dist/zztool.umd.js");

describe("getPercentage", () => {
  test("getPercentage", () => {
    expect(getPercentage(2000,5)).toBe('40000.00%');
    expect(getPercentage(2000,2)).toBe('100000.00%');
  });
    test("标准百分比计算", () => {
    expect(getPercentage(1, 2)).toBe("50.00%");
    expect(getPercentage(1, 4)).toBe("25.00%");
    expect(getPercentage(2, 5, 1)).toBe("40.0%");
  });

  test("总值为 0 => 返回 0%", () => {
    expect(getPercentage(5, 0)).toBe("0.00%");
  });

  test("小数位设置生效", () => {
    expect(getPercentage(1, 3, 3)).toBe("33.333%");
    expect(getPercentage(2, 3, 0)).toBe("67%");
  });

  test("非法参数 => 抛出异常", () => {
    expect(() => getPercentage("1", 2)).toThrow();
    expect(() => getPercentage(1, "2")).toThrow();
    expect(() => getPercentage(1, 2, "2")).toThrow();
  });

  test("部分为 0 => 返回 0%", () => {
    expect(getPercentage(0, 100)).toBe("0.00%");
  });

  test("部分大于总值 => 百分比超过 100%", () => {
    expect(getPercentage(150, 100)).toBe("150.00%");
  });
});