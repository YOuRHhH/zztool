/**
 * 数据分组
 * @param {*} data
 * @param {*} key
 */
export function groupBy(data, key) {
    if (!data || !key || !Array.isArray(data) || typeof key !== "string" || !data.length || !data[0].hasOwnProperty(key)) {
        return data;
    }
    return data.reduce((acc, item) => {
        (acc[item[key]] = acc[item[key]] || []).push(item);
        return acc;
    }, {});
}
