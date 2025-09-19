const { chunkArray } = require("../dist/zztool.umd.js");

describe("chunkArray",() => {
  test("number", () => {
    const result = chunkArray([1, 2, 3, 4, 5,6,7,8,9],2);
    expect(result)
    .toEqual([[1,2,3,4,5],[6,7,8,9]]);
  })
  test("string", () => {
    const result = chunkArray(["1","2","3","4","5","6","7","8","9"],2);
    expect(result)
    .toEqual([["1","2","3","4","5"],["6","7","8","9"]]);
  })
  test("object", () => {
    const result = chunkArray([{a:1},{b:2},{c:3},{d:4},{e:5},{f:6},{g:7},{h:8},{i:9}],2);
    expect(result)
    .toEqual([[{a:1},{b:2},{c:3},{d:4},{e:5}],[{f:6},{g:7},{h:8},{i:9}]]);
  })
})