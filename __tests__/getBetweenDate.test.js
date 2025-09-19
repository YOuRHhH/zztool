const { getBetweenDate } = require("../dist/zztool.umd.js");

describe("getBetweenDate", () => {
  test("相同日期 => 返回单个日期", () => {
    const result = getBetweenDate("2020-01-01", "2020-01-01");
    expect(result).toEqual(["2020-01-01"]);
  });

  test("连续三天 => 返回数组", () => {
    const result = getBetweenDate("2020-01-01", "2020-01-03");
    expect(result).toEqual(["2020-01-01", "2020-01-02", "2020-01-03"]);
  });

  test("反向日期输入 => 仍然返回有序数组", () => {
    const result = getBetweenDate("2020-01-03", "2020-01-01");
    expect(result).toEqual(["2020-01-01", "2020-01-02", "2020-01-03"]);
  });

  test("days = true => 返回天数", () => {
    const result = getBetweenDate("2020-01-01", "2020-01-03", true);
    expect(result).toBe(3);
  });

  test("非法日期 => 返回空数组", () => {
    const result = getBetweenDate("invalid-date", "2020-01-01");
    expect(result).toEqual([]);
  });

  test("跨年日期 => 返回数组", () => {
    const result = getBetweenDate("2019-12-31", "2020-01-02");
    expect(result).toEqual(["2019-12-31", "2020-01-01", "2020-01-02"]);
  });
});