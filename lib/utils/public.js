export const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
export const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
/**
 * 内部默认空值检测
 * @param value
 * @returns
 */
function getType(val) {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}
export function defaultCheckEmpty(value) {
    if (value === null || value === undefined)
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
