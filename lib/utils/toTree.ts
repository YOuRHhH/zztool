type Options = {
  children?: string,
  pidVal?: string | number
}
/**
 * 转树形结构
 * @param { Array } data   数据
 * @param { String } pid   父级字段
 * @param { Object } options 配置项
 * @param { String } options.children  子级key名
 * @param { String | number } options.pidVal  父级字段值
 * @returns Array
 */
export function toTree(data: any[], pid: string, options: Options = {}): any[] {
  if (!Array.isArray(data)) return [];
  const { children = 'children', pidVal = null } = options;
  let tree: any = [];
  let lookup: any = {};
  data.forEach((item) => {
    lookup[item.id] = {...item, [children]: []}
  });
  data.forEach((item) => {
    const parent = lookup[item[pid]];
    if (item[pid] == pidVal || !parent) {
      tree.push(lookup[item.id]);
    } else {
      lookup[item[pid]].children.push(lookup[item.id]);
    }
  });
  return tree;
}