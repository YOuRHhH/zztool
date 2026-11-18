/**
 * 合并数据，取交集/并集/差集/补集
 * 并集：合并去重
 * 交集：两个数组都有的值
 * 差集：data1中有，data2中没有的值
 * 补集：两个数组中各自没有的值
 * @param {*} data1
 * @param {*} data2
 * @param {*} type 1：并集，2：交集，3：差集，4：补集
 * @returns {Array} 合并后的数组
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @note 暂不支持对象，默认返回空数组
 * @example
 * // 调用示例
 * dataMerge([1,2,3], [2,3,4], 1) // [1,2,3,4]
 */
export function dataMerge(data1, data2, type = 1) {
    if (!Array.isArray(data1) || !Array.isArray(data2))
        return [];
    if (type === 1)
        return Array.from(new Set([...data1, ...data2]));
    if (type !== 2 && type !== 3 && type !== 4)
        return [];
    // ES2015 的 Set.has 与 includes 一样能匹配 NaN，filter 保留原数组的顺序和重复项。
    const right = new Set(data2);
    if (type === 2)
        return data1.filter(value => right.has(value));
    const onlyLeft = data1.filter(value => !right.has(value));
    if (type === 3)
        return onlyLeft;
    const left = new Set(data1);
    return [...onlyLeft, ...data2.filter(value => !left.has(value))];
}
