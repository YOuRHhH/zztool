const { arrayTrim } = require("../dist/zztool.umd.js");

describe("arrayTrim",() => {
  test("arrayTrim", () => {
    const result = arrayTrim([1, 2, 3, 4, 5,,{},[],"",'6',null,undefined,NaN,false,true]);
    expect(result)
    .toEqual([1, 2, 3, 4, 5, '6', NaN, false, true]);
  })
})