const { getUrlParam } = require("../dist/zztool.umd.js");



describe("getUrlParam", () => {

  test("传入 URL 获取参数", () => {
    const url = "http://example.com/?x=100&y=test";
    const params = getUrlParam(url);
    expect(params).toEqual({ x: "100", y: "test" });
  });

  test("无参数 URL => 返回空对象", () => {
    const url = "http://example.com/";
    const params = getUrlParam(url);
    expect(params).toEqual({});
  });

  test("参数包含特殊字符", () => {
    const url = "http://example.com/?a=1&b=hello%20world&c=%40%23";
    const params = getUrlParam(url);
    expect(params).toEqual({ a: "1", b: "hello%20world", c: "%40%23" });
  });

  test("泛型指定返回类型（仍是字符串）", () => {
    const url = "http://example.com/?a=1&b=test";
    const params = getUrlParam(url);
    expect(params.a).toBe("1"); // 注意仍然是 string
    expect(params.b).toBe("test");
  });
});