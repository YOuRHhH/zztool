const { paramformat } = require("../dist/zztool.umd.js");

describe("paramformat", () => {
  const obj = { a: 1, b: "test", c: null, d: undefined };

  test("url 格式化参数", () => {
    const result = paramformat(obj, "url");
    expect(result).toBe("a=1&b=test&c=&d=");
  });

  test("json 格式化参数", () => {
    const result = paramformat(obj, "json");
    expect(result).toBe(JSON.stringify(obj));
  });

  test("默认类型为 url", () => {
    const result = paramformat({ x: "hello", y: 123 });
    expect(result).toBe("x=hello&y=123");
  });

  test("非对象参数返回空字符串", () => {
    expect(paramformat(null, "url")).toBe("");
    expect(paramformat(undefined, "json")).toBe("");
    expect(paramformat(123, "url")).toBe("");
    expect(paramformat("abc", "formData")).toBe("");
  });

  test("对象中含特殊字符编码", () => {
    const specialObj = { "key 1": "a b", "key&2": "c&d" };
    const result = paramformat(specialObj, "url");
    expect(result).toBe("key%201=a%20b&key%262=c%26d");
  });
});