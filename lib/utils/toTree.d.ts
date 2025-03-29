type Options = {
    children?: string;
    pidVal?: string | number;
};
/**
 * 转树形结构
 * @param { Array } data   数据
 * @param { String } pid   父级字段
 * @param { Object } options 配置项
 * @param { String } options.children  子级key名
 * @param { String | number } options.pidVal  父级字段值
 * @returns Array
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * toTree([{ id: 1, pid: 0 }, { id: 2, pid: 1 }, { id: 3, pid: 1 }], 'pid')
 * // [{ id: 1, pid: 0, children: [{ id: 2, pid: 1 }, { id: 3, pid: 1 }] }]
 */
export declare function toTree(data: any[], pid: string, options?: Options): any[];
export {};
