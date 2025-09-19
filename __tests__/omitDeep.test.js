const { omitDeep } = require("../dist/zztool.umd.js");

describe("omitDeep", () => {
  const data = {
    user: {
      id: 1,
      name: "Alice",
      profile: {
        age: 25,
        city: "Beijing"
      }
    },
    meta: {
      timestamp: 123456,
      tags: ["test", "demo"]
    }
  };

  test("删除单个深层属性", () => {
    const result = omitDeep(data, ["user.profile.age"]);
    expect(result.user.profile).toEqual({ city: "Beijing" });
    expect(result.user.id).toBe(1);
    expect(result.meta.timestamp).toBe(123456);
  });

  test("删除多个深层属性", () => {
    const result = omitDeep(data, ["user.profile.age", "meta.timestamp"]);
    expect(result.user.profile).toEqual({ city: "Beijing" });
    expect(result.meta).toEqual({ tags: ["test", "demo"] });
  });

  test("删除不存在的属性不会报错", () => {
    const result = omitDeep(data, ["user.profile.height", "meta.invalid"]);
    expect(result).toEqual(data); // 原数据结构不变
  });

  test("删除顶层属性", () => {
    const result = omitDeep(data, ["meta"]);
    expect(result.meta).toBeUndefined();
    expect(result.user.id).toBe(1);
  });

  test("不修改原对象", () => {
    const copy = omitDeep(data, ["user.profile.age"]);
    expect(data.user.profile).toEqual({ age: 25, city: "Beijing" });
  });

  test("支持数组下标删除", () => {
    const arrData = {
      a: [{ x: 1, y: 2 }, { x: 3, y: 4 }],
      b: { c: 5 }
    };
    const result = omitDeep(arrData, ["a.0.x", "b.c"]);
    expect(result.a[0]).toEqual({ y: 2 });
    expect(result.b).toEqual({});
  });

  test("删除空对象或数组属性", () => {
    const emptyData = {
      a: {},
      b: [],
      c: { d: {} }
    };
    const result = omitDeep(emptyData, ["a", "b", "c.d"]);
    expect(result).toEqual({ c: {} });
  });

  test("删除属性名为数字或特殊字符", () => {
    const specialData = {
      "1": "one",
      "2.a": "two",
      nested: { "key-1": "value1" }
    };
    const result = omitDeep(specialData, ["1", "nested.key-1"]);
    expect(result).toEqual({ "2.a": "two", nested: {} });
  });
});