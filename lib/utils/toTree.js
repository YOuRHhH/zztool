/**
 * 转树形结构
 * @param { array } data   数据
 * @param { string } pid   父级字段
 * @returns Array
 * @see {@link https://yourhhh.github.io/zztoolDocument/#toTree} API 文档
 * @example
 * // 调用示例
 * toTree([{ id: 1, pid: 0 }, { id: 2, pid: 1 }, { id: 3, pid: 1 }], 'pid')
 * // [{ id: 1, pid: 0, children: [{ id: 2, pid: 1 }, { id: 3, pid: 1 }] }]
 */
export function toTree(data, pid) {
    if (!Array.isArray(data))
        return [];
    let tree = [];
    let lookup = {};
    data.forEach((item) => {
        lookup[item.id] = Object.assign(Object.assign({}, item), { ['children']: [] });
    });
    data.forEach((item) => {
        const parent = lookup[item[pid]];
        if (!parent) {
            tree.push(lookup[item.id]);
        }
        else {
            lookup[item[pid]].children.push(lookup[item.id]);
        }
    });
    return tree;
}
