/**
 * 深克隆
 * @param {*} obj
 * @returns
 */
export function deepClone(obj, hash = new WeakMap()) {
    // 处理原始类型和函数
    if (obj === null || typeof obj !== 'object')
        return obj;
    if (typeof obj === 'function') {
        return obj.bind(null); // 复制函数（返回一个绑定空 this 的副本）
    }
    // 处理循环引用
    if (hash.has(obj))
        return hash.get(obj);
    let clone;
    // 处理 Date
    if (obj instanceof Date) {
        clone = new Date(obj);
        hash.set(obj, clone);
        return clone;
    }
    // 处理 RegExp
    if (obj instanceof RegExp) {
        clone = new RegExp(obj.source, obj.flags);
        hash.set(obj, clone);
        return clone;
    }
    // 处理 Map
    if (obj instanceof Map) {
        clone = new Map();
        hash.set(obj, clone);
        obj.forEach((value, key) => {
            clone.set(deepClone(key, hash), deepClone(value, hash));
        });
        return clone;
    }
    // 处理 Set
    if (obj instanceof Set) {
        clone = new Set();
        hash.set(obj, clone);
        obj.forEach((value) => {
            clone.add(deepClone(value, hash));
        });
        return clone;
    }
    // 处理 Array 和 Object
    clone = Array.isArray(obj) ? [] : {};
    hash.set(obj, clone);
    // 支持 Symbol 作为 key
    const keys = Reflect.ownKeys(obj);
    keys.forEach((key) => {
        clone[key] = deepClone(obj[key], hash);
    });
    return clone;
}
