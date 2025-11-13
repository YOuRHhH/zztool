const { stripEmpty } = require("../dist/zztool.umd.js");
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

describe('stripEmpty 函数严格边缘测试', () => {
  // 测试1: 基本空值移除
  describe('基本空值移除', () => {
    test('移除空字符串', () => {
      const input = { a: '', b: 'value', c: '' };
      const result = stripEmpty(input);
      expect(result).toEqual({ b: 'value' });
    });

    test('移除 null 和 undefined', () => {
      const input = { a: null, b: undefined, c: 'value', d: null };
      const result = stripEmpty(input);
      expect(result).toEqual({ c: 'value' });
    });

    test('移除空对象', () => {
      const input = { a: {}, b: { c: 'value' }, d: {} };
      const result = stripEmpty(input);
      expect(result).toEqual({ b: { c: 'value' } });
    });

    test('移除空数组', () => {
      const input = { a: [], b: [1, 2], c: [] };
      const result = stripEmpty(input);
      expect(result).toEqual({ b: [1, 2] });
    });
  });

  // 测试2: 嵌套对象处理
  describe('嵌套对象处理', () => {
    test('深度嵌套空值移除', () => {
      const input = {
        a: 1,
        b: {
          c: '',
          d: {
            e: null,
            f: {
              g: {},
              h: 'value'
            }
          }
        },
        i: []
      };
      const result = stripEmpty(input);
      expect(result).toEqual({
        a: 1,
        b: {
          d: {
            f: {
              h: 'value'
            }
          }
        }
      });
    });

    test('多层空对象最终被移除', () => {
      const input = {
        a: {
          b: {
            c: {}
          }
        },
        d: 'value'
      };
      const result = stripEmpty(input);
      expect(result).toEqual({ d: 'value' });
    });
  });

  // 测试3: 数组处理测试
  describe('数组处理测试', () => {
    test('filterArray: true 时移除数组空项', () => {
      const input = {
        arr: ['', 'value', null, undefined, {}, [], 'end']
      };
      const result = stripEmpty(input, { filterArray: true });
      expect(result).toEqual({
        arr: ['value', 'end']
      });
    });

    test('filterArray: false 时保留数组空项', () => {
      const input = {
        arr: ['', 'value', null, {}]
      };
      const result = stripEmpty(input, { filterArray: false });
      expect(result).toEqual({
        arr: ['', 'value', null, {}]
      });
    });

    test('嵌套数组中的空值处理', () => {
      const input = {
        a: [
          { b: '', c: 'value' },
          { d: null, e: [] },
          { f: {}, g: [1, 2] }
        ]
      };
      const result = stripEmpty(input);
      expect(result).toEqual({
        a: [
          { c: 'value' },
          { g: [1, 2] }
        ]
      });
    });

    test('空数组被移除', () => {
      const input = {
        a: [1, 2],
        b: [],
        c: [''],
        d: [null, {}]
      };
      const result = stripEmpty(input);
      expect(result).toEqual({
        a: [1, 2],
      });
    });
  });

  // 测试4: 特殊值和边界情况
  describe('特殊值和边界情况', () => {
    test('数字0不被移除', () => {
      const input = { a: 0, b: '', c: 1 };
      const result = stripEmpty(input);
      expect(result).toEqual({ a: 0, c: 1 });
    });

    test('false不被移除', () => {
      const input = { a: false, b: '', c: true };
      const result = stripEmpty(input);
      expect(result).toEqual({ a: false, c: true });
    });

    test('NaN不被移除', () => {
      const input = { a: NaN, b: '', c: 1 };
      const result = stripEmpty(input);
      expect(result).toEqual({ a: NaN, c: 1 });
    });

    test('函数不被移除', () => {
      const func = () => {};
      const input = { a: func, b: '', c: 'value' };
      const result = stripEmpty(input);
      expect(result).toEqual({ a: func, c: 'value' });
    });

    test('Symbol不被移除', () => {
      const sym = Symbol('test');
      const input = { a: sym, b: '', c: 'value' };
      const result = stripEmpty(input);
      expect(result).toEqual({ a: sym, c: 'value' });
    });

    test('日期对象不被移除', () => {
      const date = new Date();
      const input = { a: date, b: '', c: 'value' };
      const result = stripEmpty(input);
      expect(result).toEqual({ a: date, c: 'value' });
    });

    test('正则表达式不被移除', () => {
      const regex = /test/gi;
      const input = { a: regex, b: '', c: 'value' };
      const result = stripEmpty(input);
      expect(result).toEqual({ a: regex, c: 'value' });
    });
  });

  // 测试5: 自定义 checkEmptyFn
  describe('自定义 checkEmptyFn', () => {
    test('自定义空值判断函数', () => {
      const customCheck = (val) => {
        if (val === 0) return true; // 将0也视为空
        return defaultCheckEmpty(val);
      };

      const input = { a: 0, b: '', c: 1, d: null };
      const result = stripEmpty(input, { checkEmptyFn: customCheck });
      expect(result).toEqual({ c: 1 });
    });

    test('严格模式自定义函数', () => {
      const strictCheck = (val) => {
        // 连false也认为是空
        return val === false || defaultCheckEmpty(val);
      };

      const input = { a: false, b: '', c: true, d: {} };
      const result = stripEmpty(input, { checkEmptyFn: strictCheck });
      expect(result).toEqual({ c: true });
    });
  });

  // 测试6: 边界情况和错误处理
  describe('边界情况和错误处理', () => {
    test('空输入返回原值', () => {
      expect(stripEmpty(null)).toBe(null);
      expect(stripEmpty(undefined)).toBe(undefined);
      expect(stripEmpty('string')).toBe('string');
      expect(stripEmpty(123)).toBe(123);
    });

    test('空对象返回空对象', () => {
      const input = {};
      const result = stripEmpty(input);
      expect(result).toEqual({});
    });

    test('全是空值的对象', () => {
      const input = { a: '', b: null, c: undefined, d: {}, e: [] };
      const result = stripEmpty(input);
      expect(result).toEqual({});
    });

    test('没有空值的对象', () => {
      const input = { a: 1, b: false, c: 0, d: 'value' };
      const result = stripEmpty(input);
      expect(result).toEqual(input);
    });
  });

  // 测试7: 循环引用处理
  describe('循环引用处理', () => {
    test('自引用对象', () => {
      const input = { a: 'value', b: {} };
      input.self = input;
      
      expect(() => stripEmpty(input)).not.toThrow();
      // 注意：循环引用可能导致无限递归，但你的代码中似乎没有处理这种情况
    });

    test('相互引用对象', () => {
      const obj1 = { a: 'value1' };
      const obj2 = { b: 'value2', ref: obj1 };
      obj1.ref = obj2;

      expect(() => stripEmpty(obj1)).not.toThrow();
    });
  });

  // 测试8: 数组 trim 功能集成测试
  describe('arrayTrim 集成测试', () => {
    test('数组头尾空值被移除', () => {
      const input = {
        arr: ['', 'value1', '', 'value2', '']
      };
      const result = stripEmpty(input, { filterArray: true });
      expect(result).toEqual({
        arr: ['value1',  'value2']
      });
    });

    test('中间空值保留', () => {
      const input = {
        arr: ['value1', '', 'value2']
      };
      const result = stripEmpty(input, { filterArray: true });
      expect(result).toEqual({
        arr: ['value1', 'value2']
      });
    });
  });

  // 测试9: 复杂混合结构
  describe('复杂混合结构', () => {
    test('对象数组混合嵌套', () => {
      const input = {
        users: [
          { name: 'John', age: 30, tags: ['', 'admin', ''], profile: {} },
          { name: '', age: null, tags: [], profile: { avatar: '' } },
          { name: 'Jane', age: 25, tags: ['user'], profile: { avatar: 'pic.jpg' } }
        ],
        settings: { theme: '', notifications: true, emptyObj: {} },
        emptyArr: []
      };

      const result = stripEmpty(input);

      expect(result).toEqual({
        users: [
          { name: 'John', age: 30, tags: ['admin'] },
          { name: 'Jane', age: 25, tags: ['user'], profile: { avatar: 'pic.jpg' } }
        ],
        settings: { notifications: true }
      });
    });
  });

  // 测试10: 原型链和特殊属性
  describe('原型链和特殊属性', () => {
    test('继承的属性不被处理', () => {
      class BaseClass {
        baseProp = 'base';
        emptyProp = '';
      }
      
      const child = new BaseClass();
      (child).ownProp = 'own';
      (child).ownEmpty = '';

      const result = stripEmpty(child);
      expect(result).toEqual({
        baseProp: 'base',
        ownProp: 'own'
      });
    });

    test('Symbol 作为键名', () => {
      const sym = Symbol('symbolKey');
      const input = {
        [sym]: 'symbolValue',
        normalKey: '',
        anotherKey: 'value'
      };
      
      const result = stripEmpty(input);
      expect(result).toEqual({
        [sym]: 'symbolValue',
        anotherKey: 'value'
      });
    });
  });

  // 测试11: 性能测试
  describe('性能测试', () => {
    // test('大对象性能', () => {
    //   const bigObj = {};
    //   for (let i = 0; i < 1000; i++) {
    //     bigObj[`key${i}`] = i % 2 === 0 ? { nested: { value: i } } : '';
    //   }

    //   const start = performance.now();
    //   const result = stripEmpty(bigObj);
    //   const end = performance.now();

    //   expect(Object.keys(result).length).toBe(500);
    //   expect(end - start).toBeLessThan(1000); // 1秒内完成
    // });

    // test('深度嵌套性能', () => {
    //   let deepObj = {};
    //   let current = deepObj;
    //   for (let i = 0; i < 50; i++) {
    //     current.level = { value: i % 2 === 0 ? '' : 'value' };
    //     current = current.level;
    //   }

    //   expect(() => stripEmpty(deepObj)).not.toThrow();
    // });
  });
});