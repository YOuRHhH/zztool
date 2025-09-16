type Options = {
    children?: string;
    pidVal?: string | number;
};
/**
 * 转树形结构
 * @param { array } data   数据
 * @param { string } pid   父级字段
 * @param { object } options 配置项
 * @param { string } options.children  子级key名
 * @param { string | number } options.pidVal  父级字段值
 * @returns Array
 * @see {@link https://yourhhh.github.io/zztoolDocument/#toTree} API 文档
 * @example
 * // 调用示例
 * toTree([{ id: 1, pid: 0 }, { id: 2, pid: 1 }, { id: 3, pid: 1 }], 'pid')
 * // [{ id: 1, pid: 0, children: [{ id: 2, pid: 1 }, { id: 3, pid: 1 }] }]
 */
export declare function toTree(data: any[], pid: string, options?: Options): any[];
export {};
