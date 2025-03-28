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
 */
export declare function toTree(data: any[], pid: string, options?: Options): any[];
export {};
