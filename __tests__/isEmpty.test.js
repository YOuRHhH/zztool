const { isEmpty } = require("../dist/zztool.umd.js");
function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
function defaultCheckEmpty(value) {
    if (value == null)
        return true;
    if (getType(value) === "string")
        return value.trim() === "";
    if (getType(value) === "number" ||
        getType(value) === "boolean" ||
        getType(value) === "date" ||
        getType(value) === "function" ||
        getType(value) === "regexp")
        return false;
    if (Array.isArray(value))
        return value.length === 0;
    if (typeof value === "object")
        return Object.keys(value).length === 0;
    return false;
}

describe('isEmpty 严格边缘测试', () => {
  // 测试1: 基本空值检查
  describe('基本空值检查', () => {
    test('空对象应该', () => {
      expect(isEmpty({})).toBe(true);
    });

    test('空数组应该', () => {
      expect(isEmpty([])).toBe(true);
    });

    test('null应该', () => {
      expect(isEmpty(null)).toBe(true);
    });

    test('undefined', () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    test('空字符串', () => {
      expect(isEmpty('')).toBe(true);
    });
  });

  // 测试2: 复杂嵌套结构
  describe('复杂嵌套结构', () => {
    test('深度嵌套的空对象', () => {
      const data = {
        a: {
          b: {
            c: {
              d: {},
              e: [],
              f: null,
              g: undefined,
              h: ''
            }
          }
        }
      };
      expect(isEmpty(data)).toBe(true);
    });

    test('混合空值和非空值的深度嵌套', () => {
      const data = {
        a: {
          b: {
            c: {
              d: {},
              e: 'non-empty', // 唯一非空值
              f: null
            }
          }
        }
      };
      expect(isEmpty(data)).toBe(true);
    });

    test('数组内嵌套对象', () => {
      const data = {
        arr: [
          { a: {}, b: [] },
          { c: null, d: undefined },
          { e: 'value' } // 非空
        ]
      };
      expect(isEmpty(data)).toBe(true);
    });
  });

  // 测试3: 循环引用测试
  describe('循环引用处理', () => {
    test('自引用对象', () => {
      const obj = { a: {} };
      obj.self = obj;
      expect(() => isEmpty(obj)).not.toThrow();
    });

    test('相互引用对象', () => {
      const obj1 = { a: {} };
      const obj2 = { b: obj1 };
      obj1.c = obj2;
      expect(() => isEmpty(obj1)).not.toThrow();
    });

    test('数组循环引用', () => {
      const arr = [{}, []];
      arr.push(arr);
      expect(() => isEmpty(arr)).not.toThrow();
    });
  });

  // 测试4: 特殊值和边界情况
  describe('特殊值和边界情况', () => {
    test('数字0应该被视为非空', () => {
      expect(isEmpty({ a: 0 })).toBe(false);
    });

    test('false应该被视为非空', () => {
      expect(isEmpty({ a: false })).toBe(false);
    });

    test('NaN应该被视为非空', () => {
      expect(isEmpty({ a: NaN })).toBe(false);
    });

    test('日期对象应该被视为非空', () => {
      expect(isEmpty({ a: new Date() })).toBe(false);
    });

    test('正则表达式应该被视为非空', () => {
      expect(isEmpty({ a: /regex/ })).toBe(false);
    });

    test('函数应该被视为非空', () => {
      expect(isEmpty({ a: () => {} })).toBe(false);
    });

    test('Symbol应该被视为非空', () => {
      expect(isEmpty({ a: Symbol('test') })).toBe(false);
    });

    test('Buffer 有值应为非空', () => {
      expect(isEmpty({ a: Buffer.from('test') })).toBe(false);
    });
    test('Buffer 无值应为空', () => {
      expect(isEmpty({ a: Buffer.from('') })).toBe(true);
    });
  });

  // 测试5: 忽略键功能测试
  describe('ignoreKeys 功能测试', () => {
    test('忽略单个键', () => {
      const data = {
        a: 'non-empty',
        b: {},
        c: []
      };
      expect(isEmpty(data, { ignoreKeys: ['a'] })).toBe(true);
    });
    // 还未支持 路径
    // test('忽略嵌套键', () => {
    //   const data = {
    //     level1: {
    //       level2: {
    //         target: 'non-empty',
    //         empty: {}
    //       }
    //     }
    //   };
    //   expect(isEmpty(data, { ignoreKeys: ['level1.level2.target'] })).toBe(false);
    // });

    test('忽略多个键', () => {
      const data = {
        a: 'value1',
        b: 'value2',
        c: {}
      };
      expect(isEmpty(data, { ignoreKeys: ['a', 'b'] })).toBe(true);
    });
  });

  // 测试6: 最大深度限制
  describe('maxDepth 功能测试', () => {
    test('限制深度为1', () => {
      const data = {
        a: {
          b: {
            c: 'deep-value'
          }
        }
      };
      expect(isEmpty(data, { maxDepth: 1 })).toBe(false);
    });

    test('限制深度为2', () => {
      const data = {
        a: {
          b: {
            c: 'deep-value' // 在深度3，应该被忽略
          }
        }
      };
      expect(isEmpty(data, { maxDepth: 2 })).toBe(false);
    });

    test('无限制深度', () => {
      const data = {
        a: {
          b: {
            c: {
              d: 'deep-value'
            }
          }
        }
      };
      expect(isEmpty(data, { maxDepth: Infinity })).toBe(false);
    });
  });

  // 测试7: 自定义检查函数
  describe('自定义 checkEmptyFn', () => {
    test('自定义空值判断', () => {
      const customCheck = (val) => {
        if (val === 'CUSTOM_EMPTY') return true;
        return defaultCheckEmpty(val);
      };

      const data = {
        a: 'CUSTOM_EMPTY',
        b: 'normal-value'
      };
      expect(isEmpty(data, { checkEmptyFn: customCheck })).toBe(true);
    });

    test('严格模式自定义函数', () => {
      const strictCheck = (val) => {
        // 连0和false都认为是空
        return val === 0 || val === false || defaultCheckEmpty(val);
      };

      expect(isEmpty({ a: 0 }, { checkEmptyFn: strictCheck })).toBe(true);
      expect(isEmpty({ a: false }, { checkEmptyFn: strictCheck })).toBe(true);
    });
  });

  // 测试8: returnKeys 模式测试
  describe('returnKeys 模式', () => {
    test('返回空值路径', () => {
      const data = {
        a: {},
        b: {
          c: [],
          d: null
        },
        e: 'non-empty'
      };
      const result = isEmpty(data, { returnKeys: true });
      expect(result).toEqual(expect.arrayContaining(['a', 'b.c', 'b.d']));
    });

    test('忽略键在returnKeys模式下的表现', () => {
      const data = {
        a: {},
        b: 'non-empty',
        c: []
      };
      const result = isEmpty(data, { 
        returnKeys: true, 
        ignoreKeys: ['a'] 
      });
      expect(result).toEqual(['c']);
    });
  });

  // 测试9: 类型安全和错误处理
  describe('类型安全和错误处理', () => {

    test('parentKey参数测试', () => {
      const data = { a: {} };
      const result = isEmpty(data, { 
        parentKey: 'prefix',
        returnKeys: true 
      });
      expect(result).toEqual(['prefix.a']);
    });

    test('混合类型数组', () => {
      const data = {
        arr: [
          0,
          false,
          NaN,
          {},
          [],
          'string',
          { nested: {} }
        ]
      };
      expect(isEmpty(data)).toBe(true);
    });
  });

  // 测试10: 性能和大数据测试
  describe('性能和大数据测试', () => {
    test('大对象性能测试', () => {
      const bigObject = {};
      for (let i = 0; i < 1000; i++) {
        bigObject[`key${i}`] = i % 2 === 0 ? {} : 'value';
      }
      
      const start = performance.now();
      const result = isEmpty(bigObject);
      const end = performance.now();
      
      expect(result).toBe(true);
      expect(end - start).toBeLessThan(1000); // 应该在1秒内完成
    });

    test('深度嵌套性能测试', () => {
      let deepObject = {};
      let current = deepObject;
      for (let i = 0; i < 100; i++) {
        current.level = {};
        current = current.level;
      }
      
      expect(() => isEmpty(deepObject)).not.toThrow();
    });
  });

  // 测试11: 边缘数据类型
  describe('边缘数据类型', () => {
    test('Map和Set对象', () => {
      expect(isEmpty({ a: new Map() })).toBe(true);
      expect(isEmpty({ a: new Set() })).toBe(true);
      expect(isEmpty({ a: new Map([['key', 'value']]) })).toBe(true);
    });

    test('Promise对象', () => {
      expect(isEmpty({ a: Promise.resolve() })).toBe(true);
    });

    test('类实例对象', () => {
      class TestClass {
        emptyProp = {};
        nonEmptyProp = 'value';
      }
      expect(isEmpty(new TestClass())).toBe(true);
    });

    test('稀疏数组', () => {
      const sparseArray = new Array(5);
      expect(isEmpty({ a: sparseArray })).toBe(true);
    });

    test('ArrayBuffer', () => {
      expect(isEmpty({ a: new ArrayBuffer(0) })).toBe(true);
      expect(isEmpty({ a: new ArrayBuffer(10) })).toBe(true);
    });
  });
});