/**
 * 获取类型
 * @param data
 * @returns 类型
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getType(1) // number
 */
export function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
