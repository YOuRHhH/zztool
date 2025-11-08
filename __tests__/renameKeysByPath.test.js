const { renameKeysByPath } = require("../dist/zztool.umd.js");

describe("renameKeysByPath", () => {
  test("单个 key 重命名", () => {
    const data = { a: { b: { c: 1 }, c: 2 } };
    const result = renameKeysByPath(data, "a.b.c", "a.b.xxx");
    expect(result).toEqual({ a: { b: { xxx: 1 }, c: 2 } });
    const result2 = renameKeysByPath(data, "a..c", "a.xxx");
    expect(result2).toEqual({ a: { b: { c: 1 }, xxx: 2 } });
  });

  test("多个 key 重命名", () => {
    const data = { a: { b: { c: 1 }, c: 2 } };
    const result = renameKeysByPath(data, "a.c,a.b.c", "a.xxx,a.b.xxx");
    expect(result).toEqual({ a: { b: { xxx: 1 }, xxx: 2 } });
  });

  test("数组下标路径重命名", () => {
    const data = { a: [{ b: 1 }, { b: 2 }] };
    const result = renameKeysByPath(data, "a[0].b,a[1].b", "a[0].x,a[1].x");
    expect(result).toEqual({ a: [{ x: 1 }, { x: 2 }] });
  });

  test("旧 key 不存在跳过", () => {
    const data = { a: { b: 1 } };
    const result = renameKeysByPath(data, "a.c", "a.d");
    expect(result).toEqual({ a: { b: 1 } });
  });

  test("新 key 已存在抛错", () => {
    const data = { a: { b: 1, c: 2 } };
    expect(() => renameKeysByPath(data, "a.b", "a.c")).toThrow();
  });

  test("空对象或空路径抛错", () => {
    expect(() => renameKeysByPath({}, "a", "b")).toThrow();
    expect(() => renameKeysByPath({ a: 1 }, "", "b")).toThrow();
    expect(() => renameKeysByPath({ a: 1 }, "a", "")).toThrow();
  });

});