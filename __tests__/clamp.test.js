const { clamp } = require("../dist/zztool.umd.js");

describe("clamp",() => {
  test("number", () => {
    const result = clamp(5, 0, 10)
    expect(result)
    .toEqual(5);
  })
  test("min", () => {
    const result = clamp(2,5, 10)
    expect(result)
    .toEqual(5);
  })
  test("min1", () => {
    const result = clamp(5,5, 10)
    expect(result)
    .toEqual(5);
  })
  test("max", () => {
    const result = clamp(11, 0, 10)
    expect(result)
    .toEqual(10);
  })
  test("max1", () => {
    const result = clamp(10, 0, 10)
    expect(result)
    .toEqual(10);
  })
})