export const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
export const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
/**
 * 内部默认空值检测
 * @param value
 * @returns
 */
export function defaultCheckEmpty(value) {
    return (value === "" ||
        value === null ||
        value === undefined || (typeof value === "object" && (Array.isArray(value) ? value.length === 0 : Object.keys(value).length === 0)));
}
