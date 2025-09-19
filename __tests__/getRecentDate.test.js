const { getRecentDate } = require("../dist/zztool.umd.js");

describe("getRecentDate", () => {
    const today = new Date("2025-09-19");

  test("默认参数 before step=1", () => {
    const result = getRecentDate({ date: today });
    // step=1 对应 3 天
    expect(result.length).toBe(3);
  });

  test("type=after step=2", () => {
    const result = getRecentDate({ date: today, step: 2, type: "after" });
    // step=2 对应 7 天
    expect(result.length).toBe(7);
    // 第一天是 tomorrow
    expect(result[0]).toBe("2025-09-20");
  });

  test("自定义 option", () => {
    const result = getRecentDate({
      date: today,
      step: 4,
      type: "before",
      option: { 1: 1, 2: 2, 3: 3, 4: 4 }
    });
    expect(result.length).toBe(4);
    expect(result[result.length - 1]).toBe("2025-09-18");
  });

  test("非法日期 => 返回空数组", () => {
    const result = getRecentDate({ date: "invalid-date" });
    expect(result).toEqual([]);
  });

  test("返回 after 日期数组正确顺序", () => {
    const result = getRecentDate({ date: today, step: 1, type: "after" });
    expect(result).toEqual(["2025-09-20", "2025-09-21", "2025-09-22"]);
  });

  test("返回 before 日期数组正确顺序", () => {
    const result = getRecentDate({ date: today, step: 1, type: "before" });
    expect(result).toEqual(["2025-09-16","2025-09-17", "2025-09-18"]);
  });
});