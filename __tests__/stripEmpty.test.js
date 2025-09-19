const { stripEmpty, deepClone } = require("../dist/zztool.umd.js");

describe("stripEmpty", () => {
  const obj = {
    a: 1,
    b: "",
    c: null,
    d: [],
    e: {},
    f: 0,
    g: false,
    z: {
      a: 1,
      b: "",
      xx: {},
      zz: [],
      yy: {
        name: "",
        age: 25,
        hobby: ['123','test','',undefined,null,0,false],
      },
    },
  };
  test("递归删除空属性", () => {
    const result = stripEmpty(deepClone(obj)); // 深拷贝
    expect(result).toEqual({
      a: 1,
      f: 0,
      g: false,
      z: {
        a: 1,
        yy: {
          age: 25,
          hobby: ['123','test',0,false],
        },
      },
    });
  });
  test("options.filterArray = false", () => {
    const result = stripEmpty(deepClone(obj),{filterArray:false}); // 深拷贝
    expect(result).toEqual({
      a: 1,
      f: 0,
      g: false,
      z: {
        a: 1,
        yy: {
          age: 25,
          hobby: ['123','test','',undefined,null,0,false],
        },
      },
    });
  });
});
