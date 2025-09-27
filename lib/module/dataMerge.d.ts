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
export declare function dataMerge<T>(data1: T[], data2: T[], type?: number): T[];
