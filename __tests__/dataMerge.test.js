const { dataMerge } = require("../dist/zztool.umd.js");

describe('dataMerge',() => {
  const arr = [1,2,3];
  const arr1 = [2,3,4];
  test('并集', () => {
    const res = dataMerge(arr,arr1,1);
    expect(res).toEqual([1,2,3,4]);
  });
  test('交集', () => {
    const res = dataMerge(arr,arr1,2);
    expect(res).toEqual([2,3]);
  });
  test('差集', () => {
    const res = dataMerge(arr,arr1,3);
    expect(res).toEqual([1]);
  });
  test('补集', () => {
    const res = dataMerge(arr,arr1,4);
    expect(res).toEqual([1,4]);
  });
})