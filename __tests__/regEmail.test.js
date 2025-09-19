const { regEmail } = require("../dist/zztool.umd.js");

describe("regEmail", () => {
  test("合法邮箱", () => {
    expect(regEmail("test@example.com")).toBe(true);
    expect(regEmail("user.name+123@gmail.com")).toBe(true);
    expect(regEmail("user_name-99@test.co.uk")).toBe(true);
    expect(regEmail("a@b.io")).toBe(true);
  });

  test("不合法邮箱", () => {
    expect(regEmail("")).toBe(false);
    expect(regEmail("plainaddress")).toBe(false);
    expect(regEmail("@missingusername.com")).toBe(false);
    expect(regEmail("username@.com")).toBe(false);
    expect(regEmail("username@com")).toBe(false);
    expect(regEmail("username@domain..com")).toBe(false);
    expect(regEmail("username@domain.c")).toBe(false); // 顶级域名过短
  });

  test("特殊字符测试", () => {
    expect(regEmail("user!#$%&'*+/=?^_`{|}~-@example.com")).toBe(true);
    expect(regEmail("user..dots@example.com")).toBe(false); // 连续点不允许
    expect(regEmail(".user@example.com")).toBe(false); // 开头点不允许
    expect(regEmail("user.@example.com")).toBe(false); // 结尾点不允许
  });

  test("带子域名的邮箱", () => {
    expect(regEmail("user@mail.example.com")).toBe(true);
    expect(regEmail("user@sub.sub2.example.co.uk")).toBe(true);
  });
});