const { equal } = require("../dist/zztool.umd.js");

describe('equal 函数严格边缘测试', () => {
  // 测试1: 基本功能测试
  describe('基本功能测试', () => {
    test('简单对象相等', () => {
      expect(equal({ a: 1 }, { a: 1 })).toBe(false);
    });

    test('简单对象不相等', () => {
      expect(equal({ a: 1 }, { a: 2 })).toBe(true);
    });

    test('嵌套对象相等', () => {
      const obj1 = { a: { b: { c: 1 } } };
      const obj2 = { a: { b: { c: 1 } } };
      expect(equal(obj1, obj2)).toBe(false);
    });

    test('嵌套对象不相等', () => {
      const obj1 = { a: { b: { c: 1 } } };
      const obj2 = { a: { b: { c: 2 } } };
      expect(equal(obj1, obj2)).toBe(true);
    });
  });

  // 测试2: 数组相关测试
  describe('数组功能测试', () => {
    test('空数组相等', () => {
      expect(equal([], [])).toBe(false);
    });

    test('简单数组相等', () => {
      expect(equal([1, 2, 3], [1, 2, 3])).toBe(false);
    });

    test('简单数组不相等', () => {
      expect(equal([1, 2, 3], [1, 2, 4])).toBe(true);
    });

    test('数组长度不同', () => {
      expect(equal([1, 2], [1, 2, 3])).toBe(true);
    });

    test('嵌套数组相等', () => {
      const arr1 = [[1, 2], [3, 4]];
      const arr2 = [[1, 2], [3, 4]];
      expect(equal(arr1, arr2)).toBe(false);
    });

    test('嵌套数组不相等', () => {
      const arr1 = [[1, 2], [3, 4]];
      const arr2 = [[1, 2], [3, 5]];
      expect(equal(arr1, arr2)).toBe(true);
    });

    test('对象内数组比较', () => {
      const obj1 = { arr: [1, 2, 3] };
      const obj2 = { arr: [1, 2, 4] };
      expect(equal(obj1, obj2)).toBe(true);
    });
  });

  // 测试3: arrayDiff 选项测试
  describe('arrayDiff 选项测试', () => {
    test('arrayDiff: false 时忽略数组内容', () => {
      const obj1 = { a: [1, 2, 3] };
      const obj2 = { a: [4, 5, 6] };
      expect(equal(obj1, obj2, { arrayDiff: false })).toBe(false);
    });

    test('arrayDiff: false 时只比较数组引用', () => {
      const arr = [1, 2, 3];
      const obj1 = { a: arr };
      const obj2 = { a: arr };
      expect(equal(obj1, obj2, { arrayDiff: false })).toBe(false);
    });

    test('arrayDiff: true 时深度比较数组', () => {
      const obj1 = { a: [1, 2, 3] };
      const obj2 = { a: [1, 2, 4] };
      expect(equal(obj1, obj2, { arrayDiff: true })).toBe(true);
    });
  });

  // 测试4: returnKeys 模式测试
  describe('returnKeys 模式测试', () => {
    test('返回简单差异路径', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { a: 1, b: 3 };
      const result = equal(obj1, obj2, { returnKeys: true });
      expect(result).toEqual(['b']);
    });

    test('返回嵌套差异路径', () => {
      const obj1 = { a: { b: { c: 1 } } };
      const obj2 = { a: { b: { c: 2 } } };
      const result = equal(obj1, obj2, { returnKeys: true });
      expect(result).toEqual(['a.b.c']);
    });

    test('返回数组差异路径', () => {
      const obj1 = { arr: [1, 2, 3] };
      const obj2 = { arr: [1, 2, 4] };
      const result = equal(obj1, obj2, { returnKeys: true });
      expect(result).toEqual(['arr.2']);
    });

    test('多字段差异路径', () => {
      const obj1 = { a: 1, b: 2, c: { d: 3 } };
      const obj2 = { a: 1, b: 3, c: { d: 4 } };
      const result = equal(obj1, obj2, { returnKeys: true });
      expect(result).toEqual(expect.arrayContaining(['b', 'c.d']));
    });
  });

  // 测试5: 特殊值和边界情况
  describe('特殊值和边界情况', () => {
    test('NaN 值比较', () => {
      expect(equal({ a: NaN }, { a: NaN })).toBe(true);
    });

    test('null 和 undefined 比较', () => {
      expect(equal({ a: null }, { a: undefined })).toBe(true);
    });

    test('空字符串比较', () => {
      expect(equal({ a: '' }, { a: '' })).toBe(false);
    });

    test('布尔值比较', () => {
      expect(equal({ a: true }, { a: false })).toBe(true);
    });

    test('函数比较', () => {
      const func1 = () => {};
      const func2 = () => {};
      expect(equal({ a: func1 }, { a: func2 })).toBe(true);
    });

    test('Symbol 比较', () => {
      const sym1 = Symbol('test');
      const sym2 = Symbol('test');
      expect(equal({ a: sym1 }, { a: sym2 })).toBe(true);
    });

    test('日期对象比较', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-01-01');
      expect(equal({ a: date1 }, { a: date2 })).toBe(true);
    });

    test('正则表达式比较', () => {
      const reg1 = /test/gi;
      const reg2 = /test/gi;
      expect(equal({ a: reg1 }, { a: reg2 })).toBe(true);
    });
  });

  // 测试6: 复杂嵌套结构
  describe('复杂嵌套结构', () => {
    test('混合对象和数组', () => {
      const obj1 = {
        users: [
          { id: 1, profile: { name: 'John', tags: ['admin', 'user'] } },
          { id: 2, profile: { name: 'Jane', tags: ['user'] } }
        ],
        settings: { theme: 'dark', notifications: true }
      };
      const obj2 = {
        users: [
          { id: 1, profile: { name: 'John', tags: ['admin', 'user'] } },
          { id: 2, profile: { name: 'Jane', tags: ['moderator'] } }
        ],
        settings: { theme: 'light', notifications: true }
      };
      const result = equal(obj1, obj2, { returnKeys: true});
      expect(result).toEqual(expect.arrayContaining([
        'users.1.profile.tags.0',
        'settings.theme'
      ]));
    });

    test('深度嵌套对象', () => {
      const obj1 = { a: { b: { c: { d: { e: { f: 1 } } } } } };
      const obj2 = { a: { b: { c: { d: { e: { f: 2 } } } } } };
      const result = equal(obj1, obj2, { returnKeys: true });
      expect(result).toEqual(['a.b.c.d.e.f']);
    });
  });

  // 测试7: 错误处理测试
  describe('错误处理测试', () => {
    test('非对象输入抛出错误', () => {
      expect(() => equal('string', {})).toThrow();
      expect(() => equal({}, 'string')).toThrow();
      expect(() => equal(null, {})).toThrow();
      expect(() => equal({}, null)).toThrow();
    });

    test('基本类型输入抛出错误', () => {
      expect(() => equal(123, 456)).toThrow();
      expect(() => equal(true, false)).toThrow();
    });
  });

  // 测试8: 性能和大数据测试
  describe('性能和大数据测试', () => {
    test('大对象性能', () => {
      const bigObj1 = {};
      const bigObj2 = {};
      
      for (let i = 0; i < 1000; i++) {
        bigObj1[`key${i}`] = { nested: { value: i } };
        bigObj2[`key${i}`] = { nested: { value: i } };
      }
      // 修改一个值
      bigObj2.key500.nested.value = 999;

      const start = performance.now();
      const result = equal(bigObj1, bigObj2, { returnKeys: true });
      const end = performance.now();

      expect(result).toEqual(['key500.nested.value']);
      expect(end - start).toBeLessThan(1000); // 1秒内完成
    });

    test('深度嵌套性能', () => {
      let deepObj1 = {};
      let deepObj2 = {};
      let current1 = deepObj1;
      let current2 = deepObj2;

      for (let i = 0; i < 50; i++) {
        current1.level = {};
        current2.level = {};
        current1 = current1.level;
        current2 = current2.level;
      }
      current1.value = 1;
      current2.value = 2;

      expect(() => equal(deepObj1, deepObj2)).not.toThrow();
    });
  });

  // 测试9: 键名差异测试
  describe('键名差异测试', () => {
    test('缺少键', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { a: 1 };
      const result = equal(obj1, obj2, { returnKeys: true });
      expect(result).toEqual(['b']);
    });

    test('多余键', () => {
      const obj1 = { a: 1 };
      const obj2 = { a: 1, b: 2 };
      const result = equal(obj1, obj2, { returnKeys: true });
      expect(result).toEqual(['b']);
    });

    test('键名完全不同', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 1, d: 2 };
      const result = equal(obj1, obj2, { returnKeys: true });
      expect(result).toEqual(expect.arrayContaining(['a', 'b', 'c', 'd']));
    });
  });

  // 测试10: 数组边界情况
  describe('数组边界情况', () => {
    test('test稀疏数组比较', () => {
      const arr1 = new Array(3);
      arr1[0] = 1;
      const arr2 = new Array(3);
      arr2[0] = 1;
      expect(equal({ a: arr1 }, { a: arr2 })).toBe(false);
    });

    test('数组对象混合', () => {
      const obj1 = { arr: [{ id: 1 }, { id: 2 }] };
      const obj2 = { arr: [{ id: 1 }, { id: 3 }] };
      const result = equal(obj1, obj2, { returnKeys: true });
      expect(result).toEqual(['arr.1.id']);
    });

    test('空数组与空对象', () => {
      expect(equal({ a: [] }, { a: {} })).toBe(true);
    });
  });
});