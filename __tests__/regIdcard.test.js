const { regIdcard } = require("../dist/zztool.umd.js");

describe("regIdcard", () => {
  test("合法身份证", () => {
    // 假设 11010519491231002X 是合法身份证
    expect(regIdcard("11010519491231002X")).toBe(true);
  });
  
  test("非法身份证长度或格式", () => {
    expect(regIdcard("")).toBe(false);
    expect(regIdcard("123456789012345")).toBe(false); // 少于 18 位
    expect(regIdcard("1234567890123456789")).toBe(false); // 超过 18 位
    expect(regIdcard("abcdefghijABCDEFGHI")).toBe(false); // 全字母
    expect(regIdcard("12345678901234567Y")).toBe(false); // 校验位非数字/X
  });
  
  test("非法省份码", () => {
    // 99 不存在于 provinceCodes
    expect(regIdcard("99010519491231002X")).toBe(false);
  });
  
  test("非法出生日期", () => {
    // 月份非法
    expect(regIdcard("11010519491331002X")).toBe(false);
    // 日期非法
    expect(regIdcard("11010519491232002X")).toBe(false);
    // 闰年测试：2001 年 2 月 29 日不存在
    expect(regIdcard("11010520010229002X")).toBe(false);
  });
  
  test("非法校验位", () => {
    // 正确身份证改最后一位为错误值
    expect(regIdcard("110105194912310021")).toBe(false); 
  });
});