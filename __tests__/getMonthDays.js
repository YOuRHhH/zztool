const { getMonthDays } = require("../dist/zztool.umd.js");

describe("getMonthDays", () => {
  test("getMonthDays", () => {
    expect(getMonthDays(2000,5)).toBe(31);
    expect(getMonthDays(2000,2)).toBe(29);
  });
  test("非法抛出", () => {
    expect(() => getMonthDays('123123','sdfsdf')).toThrow();
    expect(() => getMonthDays({},{})).toThrow();
    expect(() => getMonthDays([],[])).toThrow();
    expect(() => getMonthDays(2000.1,5)).toThrow();
  })
});