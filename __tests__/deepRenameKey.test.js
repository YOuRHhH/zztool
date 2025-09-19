const { deepRenameKey } = require("../dist/zztool.umd.js");

describe("deepRenameKey", () => {
  test("基本对象改名", () => {
    const obj = { a: 1, b: 2 };
    const result = deepRenameKey(obj, "b", "c");
    expect(result).toEqual({ a: 1, c: 2 });
  });

  test("嵌套对象改名", () => {
    const obj = { a: { b: { c: 1 }, c: 2 } };
    const result = deepRenameKey(obj, "c", "xxx");
    expect(result).toEqual({ a: { b: { xxx: 1 }, xxx: 2 } });
  });

  test("数组中的对象改名", () => {
    const obj = [{ id: 1 }, { id: 2 }];
    const result = deepRenameKey(obj, "id", "uuid");
    expect(result).toEqual([{ uuid: 1 }, { uuid: 2 }]);
  });

  test("没有匹配到的 key 保持不变", () => {
    const obj = { a: 1, b: 2 };
    const result = deepRenameKey(obj, "x", "y");
    expect(result).toEqual(obj);
  });

  test("多层嵌套全部替换", () => {
    const obj = {
      level1: {
        target: 1,
        level2: {
          target: 2,
        },
      },
    };
    const result = deepRenameKey(obj, "target", "renamed");
    expect(result).toEqual({
      level1: {
        renamed: 1,
        level2: {
          renamed: 2,
        },
      },
    });
  });

  test("空对象抛出异常", () => {
    expect(() => deepRenameKey({}, "a", "b")).toThrow();
  });

  test("非法输入抛出异常", () => {
    expect(() => deepRenameKey(null, "a", "b")).toThrow();
    expect(() => deepRenameKey({ a: 1 }, "", "b")).toThrow();
    expect(() => deepRenameKey({ a: 1 }, "a", "")).toThrow();
  });
});
