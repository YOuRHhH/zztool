const { dataFind } = require("../dist/zztool.umd.js");

describe('dataFind',() => {
  const obj = { a: 1, b: { c: 2, d: 3 },c:[{a:'ca',b:'cb'},{a:'ca1',b:'cb1'}],d:[1,2,3,4,5,6] };
  test('object', () => {
    const res = dataFind(obj, 'c', 2);
    expect(res).toEqual([{ c: 2, d: 3 }]);
  });
  test('array object', () => { 
    const res = dataFind(obj, 'a', 'ca');
    expect(res).toEqual([{a:'ca',b:'cb'}]);
  });
})