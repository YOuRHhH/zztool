/**
 * 根据某个字段查找对象或数组中匹配的项（返回第一个匹配项）
 * @param {*} data 要搜索的数据（对象或数组）
 * @param {*} key  要匹配的字段
 * @param {*} value  目标值
 * @returns {*} 匹配项，如果未找到则返回 null
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * dataFind({ a: 1, b: { c: 2 , d: 3} }, 'c', 2); // { c: 2, d: 3 }
 */
export function dataFind(data, key, value) {
    if (!data || typeof key !== "string" || value === undefined) {
        throw new Error('Invalid argument');
    }
    const find = (data) => {
        if (typeof data === "object" && data !== null) {
            if (data[key] === value)
                return data;
            for (const itemKey in data) {
                if (Object.prototype.hasOwnProperty.call(data, itemKey)) {
                    const result = find(data[itemKey]);
                    if (result)
                        return result;
                }
            }
        }
        else if (Array.isArray(data)) {
            for (const item of data) {
                const result = find(item);
                if (result)
                    return result;
            }
        }
        return null;
    };
    return find(data);
}
