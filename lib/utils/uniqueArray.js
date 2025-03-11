/**
 * 数组去重
 * @param data 数组
 */
export function uniqueArray(data) {
    if (!Array.isArray(data))
        return data;
    return [...new Set(data)];
}
