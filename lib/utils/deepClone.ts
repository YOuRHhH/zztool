/**
 * 深克隆
 * @param {*} obj
 * @returns
 */
export function deepClone<T>(obj:T, hash = new WeakMap()):T {
  // 处理原始类型和函数
  if (obj === null || typeof obj !== 'object') return obj;
  if (typeof obj === 'function') {
    return (obj as any).bind(null); // 复制函数（返回一个绑定空 this 的副本）
  }

  // 处理循环引用
  if (hash.has(obj as any)) return hash.get(obj as any);

  let clone:any;

  // 处理 Date
  if (obj instanceof Date) {
    clone = new Date(obj);
    hash.set(obj as any, clone);
    return clone;
  }

  // 处理 RegExp
  if (obj instanceof RegExp) {
    clone = new RegExp(obj.source, obj.flags);
    hash.set(obj as any, clone);
    return clone;
  }

  // 处理 Map
  if (obj instanceof Map) {
    clone = new Map();
    hash.set(obj as any, clone);
    obj.forEach((value, key) => {
      clone.set(deepClone(key, hash), deepClone(value, hash));
    });
    return clone;
  }

  // 处理 Set
  if (obj instanceof Set) {
    clone = new Set();
    hash.set(obj as any, clone);
    obj.forEach((value) => {
      clone.add(deepClone(value, hash));
    });
    return clone;
  }

  // 处理 Array 和 Object
  clone = Array.isArray(obj) ? [] : {};
  hash.set(obj as any, clone);

  // 支持 Symbol 作为 key
  const keys = Reflect.ownKeys(obj as any);
  keys.forEach((key) => {
    clone[key] = deepClone((obj as any)[key], hash);
  });

  return clone;
}
