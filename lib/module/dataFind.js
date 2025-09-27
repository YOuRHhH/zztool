/**
 * 根据某个字段查找对象或数组中匹配的项（返回第一个匹配项）
 * @param {*} data 要搜索的数据（对象或数组）
 * @param {*} key  要匹配的字段
 * @param {*} value  目标值
 * @returns {*} 匹配项，如果未找到则返回 null
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @note 找到会返回第一个匹配项
 * @example
 * // 调用示例
 * dataFind({ a: 1, b: { c: 2 , d: 3} }, 'c', 2); // { c: 2, d: 3 }
 */
export function dataFind(data, key, value) {
    if (!data || typeof key !== "string" || value === undefined || value === null) {
        throw new Error('Invalid argument');
    }
    const find = (data) => {
        if (data && typeof data === "object") {
            if (data[key] === value)
                return data;
            return Object.keys(data).map(itemKey => find(data[itemKey])).find(Boolean) || null;
        }
        else if (Array.isArray(data)) {
            return data.map(find).find(Boolean) || null;
        }
        return null;
    };
    return find(data);
}
