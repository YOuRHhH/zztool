const {
  arrayTrim,
  chunkArray,
  chunkArrayItem,
  dataChangeIndex,
  dataEmpty,
  dataEqual,
  dataFind
} = require("../dist/zztool.umd.js");

test.each([
  { input: [1, 2, , 3, 4, , 5], expected: [1, 2, 3, 4, 5] },
])("arrayTrim(%j) should return %j", ({ input, expected }) => {
  expect(arrayTrim(input)).toEqual(expected);
});

test.each([
  {
    input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3],
    expected: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]],
  },
])("chunkArray(%j, %j) should return %j", ({ input, expected }) => {
  expect(chunkArray(...input)).toEqual(expected);
});

test.each([
  {
    input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3],
    expected: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]],
  },
])("chunkArrayItem(%j, %j) should return %j", ({ input, expected }) => {
  expect(chunkArrayItem(...input)).toEqual(expected);
});

test.each([
  {
    obj: { name: "tom", age: 18, sex: "男", address: "北京", info: { name: "toms" } },
    oldKey: "name",
    newKey: "newname",
    expected: { newname: "tom", age: 18, sex: "男", address: "北京", info: { newname: "toms" } },
  },
])("dataChangeIndex(%j, %j, %j) should return %j", ({ obj, oldKey, newKey, expected }) => {
  expect(dataChangeIndex(obj, oldKey, newKey)).toEqual(expected);
});

test("dataEmpty({ name: 'tom', age: NaN, sex: false, address: '北京', info: { name: '' }},true) should return ['age', 'info.name']",() => {
  expect(dataEmpty({ name: 'tom', age: NaN, sex: false, address: '北京', info: { name: '' }},true)).toEqual(['age', 'info.name']);
})

test.each([
  {
    obj: { a: 1, b: 2, c: { d: 3, e: [2,1,3] } },
    obj1: { a: 1, b: 3, c: { d: 3, e: [1,2,3] } },
    option: {returnKeys:true,arrayDiff:true},
    expected: ['b', 'c.e.0', 'c.e.1'],
  },
])("dataEqual(%j, %j, %j) should return %j", ({ obj, obj1, option, expected }) => {
  expect(dataEqual( obj, obj1, option, expected)).toEqual(expected);
});

test.each([
  {
    obj: { a: 1, b: 2, c: { d: 3, e: [2,1,3] } },
    key: 'd',
    value:3,
    expected: { d: 3, e: [2,1,3] },
  },
]) ("dataFind(%j, %j, %j) should return %j", ({ obj, key, value, expected }) => {
  expect(dataFind( obj, key, value)).toEqual(expected);
});