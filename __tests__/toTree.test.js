const { toTree } = require("../dist/zztool.umd.js");

describe("toTree", () => {
  test("简单两层树", () => {
    const data = [
      { id: 1, pid: 0 },
      { id: 2, pid: 1 },
      { id: 3, pid: 1 }
    ];
    const tree = toTree(data, "pid");
    expect(tree).toEqual([
      { id: 1, pid: 0, children: [
        { id: 2, pid: 1, children: [] },
        { id: 3, pid: 1, children: [] }
      ]}
    ]);
  });

  test("多层树", () => {
    const data = [
      { id: 1, pid: 0 },
      { id: 2, pid: 1 },
      { id: 3, pid: 1 },
      { id: 4, pid: 2 }
    ];
    const tree = toTree(data, "pid");
    expect(tree).toEqual([
      { id: 1, pid: 0, children: [
        { id: 2, pid: 1, children: [
          { id: 4, pid: 2, children: [] }
        ]},
        { id: 3, pid: 1, children: [] }
      ]}
    ]);
  });

  test("没有父节点的情况", () => {
    const data = [
      { id: 1, pid: 0 },
      { id: 2, pid: 99 } // pid 不存在
    ];
    const tree = toTree(data, "pid");
    expect(tree).toEqual([
      { id: 1, pid: 0, children: [] },
      { id: 2, pid: 99, children: [] }
    ]);
  });

  test("空数组", () => {
    expect(toTree([], "pid")).toEqual([]);
  });

  test("非数组输入", () => {
    expect(toTree(null, "pid")).toEqual([]);
    expect(toTree(undefined, "pid")).toEqual([]);
  });
});