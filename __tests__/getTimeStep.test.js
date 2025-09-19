const { getTimeStep } = require("../dist/zztool.umd.js");

describe("getTimeStep", () => {
  test("默认 hh:mm 步长生成时间段", () => {
    const result = getTimeStep("08:00", "10:00", "01:00");
    expect(result).toEqual(["08:00", "09:00", "10:00"]);
  });

  test("hh:mm:ss 格式生成时间段", () => {
    const result = getTimeStep("08:00", "10:00", "01:00", "hh:mm:ss");
    expect(result).toEqual(["08:00:00", "09:00:00", "10:00:00"]);
  });

  test("自定义步长 30 分钟", () => {
    const result = getTimeStep("08:00", "10:00", "00:30");
    expect(result).toEqual(["08:00", "08:30", "09:00", "09:30", "10:00"]);
  });

  test("步长大于区间长度", () => {
    const result = getTimeStep("08:00", "09:00", "02:00");
    expect(result).toEqual(["08:00"]);
  });

  test("非法时间格式 => 抛出异常", () => {
    expect(() => getTimeStep("08", "10:00")).toThrow();
    expect(() => getTimeStep("08:00", "10")).toThrow();
    expect(() => getTimeStep("08:00", "10:00", "abc")).toThrow();
  });

  test("开始时间大于结束时间 => 抛出异常", () => {
    expect(() => getTimeStep("10:00", "08:00", "01:00")).toThrow();
  });

  test("hh:mm:ss 步长非整小时", () => {
    const result = getTimeStep("08:00:00", "09:00:00", "00:20:00", "hh:mm:ss");
    expect(result).toEqual(["08:00:00", "08:20:00", "08:40:00", "09:00:00"]);
  });

  test("步长不足整除区间 => 最后时间仍包含 end 时间", () => {
    const result = getTimeStep("08:00", "09:50", "01:00");
    expect(result).toEqual(["08:00", "09:00"]);
  });
});