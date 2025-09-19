import { getType } from './getType';
import { arrayTrim } from "./arrayTrim";
import { defaultCheckEmpty } from "./public";
/**
 * 移出对象中的空属性
 * @param {*} obj 对象
 * @param {Object} option 配置项
 * @param {Boolean} option.filterArray 默认`true` 是否过滤数组中的空项
 * @param {Function} option.checkEmptyFn 默认`defaultCheckEmpty` 是否过滤数组中的空项
 * @note 内部使用 `arrayTrime` 函数过滤数组中的空项
 * @returns
 * @example
 * // 调用示例
 * stripEmpty({ a: 1, d:'',z:{a:1,b:'',xx:{},zz:[]}}) // {a:1,z:{a:1}
 */
export function stripEmpty(obj, option) {
    if (typeof obj !== "object" || !obj || obj === null) {
        return obj;
    }
    const { checkEmptyFn, filterArray = true } = option || {};
    const checkEmpty = checkEmptyFn || defaultCheckEmpty;
    for (const key in obj) {
        const value = obj[key];
        const type = getType(value);
        if (type === 'object') {
            if (checkEmpty(value)) {
                delete obj[key];
                continue;
            }
            else {
                stripEmpty(value, option);
            }
        }
        else if (type === 'array' && filterArray) {
            obj[key] = arrayTrim(value);
            if (checkEmpty(value)) {
                delete obj[key];
                continue;
            }
            stripEmpty(obj[key], option);
        }
        else if (checkEmpty(value)) {
            delete obj[key];
            continue;
        }
    }
    return obj;
}
