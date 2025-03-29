/**
 * 获取索引值
 * 仅适用于对象嵌套，支持以下形式：
 * - 'xxx.xxx.xxx' 形式
 * - 'xxx[0].yyy' 形式
 * - [xxx, xxx, xxx] 形式
 * @param obj 目标对象
 * @param path 访问路径
 * @returns 目标值或空字符串
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getValue({ a: { b: { c: "d" } } }, "a.b.c"); // "d"
 */
export declare function getValue(obj: any, path: any): any;
