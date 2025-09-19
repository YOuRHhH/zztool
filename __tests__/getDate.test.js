const { getDate } = require("../dist/zztool.umd.js");

describe("getDate", () => {
  test("getDate", () => {
    const date = getDate('2021-01-01 00:00:00',"Y/M/D h~m~s")
    expect(date).toBe("2021/01/01 00~00~00");
  });
});