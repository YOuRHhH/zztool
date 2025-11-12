export const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
// export const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
/**
 * 内部默认空值检测
 * @param value
 * @returns
 */
export function defaultCheckEmpty(value) {
    if (value == null)
        return true;
    if (typeof value === "string")
        return value.trim() === "";
    if (typeof value === "number" || typeof value === "boolean")
        return false;
    if (Array.isArray(value))
        return value.length === 0;
    if (typeof value === "object")
        return Object.keys(value).length === 0;
    return false;
}
