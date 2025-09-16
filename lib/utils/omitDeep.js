import { deepClone } from "./deepClone";
/**
 * 删除对象中的属性
 * @param {object} obj 对象
 * @param {string[]} keys 属性
 * @see {@link https://yourhhh.github.io/zztoolDocument/#omitDeep} API 文档
 * @returns obj
 * @example
 * // 调用示例
 * const data = {
 *  user: { id: 1, name: "Alice", profile: { age: 25, city: "Beijing" } },
 *  meta: { timestamp: 123456 },
 * };
 * console.log(omitDeep(data, ["user.profile.age", "meta.timestamp"]));
 * // {
 * //  user: { id: 1, name: "Alice", profile: { city: "Beijing" } },
 * //  meta: {}
 * // }
 */
export function omitDeep(obj, keys) {
    const clone = deepClone(obj);
    const paths = keys;
    for (const path of paths) {
        const parts = path.split(".");
        let current = clone;
        for (let i = 0; i < parts.length - 1; i++) {
            if (!current[parts[i]])
                break;
            current = current[parts[i]];
        }
        current === null || current === void 0 ? true : delete current[parts[parts.length - 1]];
    }
    return clone;
}
