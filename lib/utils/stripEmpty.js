import { getType } from "./getType";
import { arrayTrim } from "./arrayTrim";
/**
 * 移出对象中的空属性
 * @param {*} obj 对象
 * @param {Object} option 配置项
 * @param {Boolean} option.filterArray 默认`true` 是否过滤数组中的空项
 * @note 内部使用 `arrayTrime` 函数过滤数组中的空项
 * @returns
 * @example
 * // 调用示例
 * stripEmpty({ a: 1, d:'',z:{a:1,b:'',xx:{},zz:[]}}) // {a:1,z:{a:1}
 */
export function stripEmpty(obj, option) {
    const config = Object.assign({ filterArray: true }, option);
    if (getType(obj) !== "object" || !obj || obj == null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map((item) => stripEmpty(item, option));
    }
    if (typeof obj !== "object") {
        return obj;
    }
    for (const key in obj) {
        if (Array.isArray(obj[key]) && config.filterArray) {
            obj[key] = arrayTrim(obj[key]);
        }
        if (typeof obj[key] === "object") {
            stripEmpty(obj[key], option);
        }
        if (!obj[key] ||
            (Array.isArray(obj[key]) && obj[key].length === 0) ||
            (getType(obj[key]) === "object" && Object.keys(obj[key]).length === 0)) {
            delete obj[key];
        }
    }
    return obj;
}
