/**
 * 参数格式化
 * @description 参数格式化 node环境需要引入 `form-data` 包
 * @param obj 参数
 * @param {url|json|formData} type 类型
 * @returns 格式化后的参数
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * console.log(paramformat({ a: 1, b: 2 }, "url")); // a=1&b=2
 */
export declare function paramformat(obj: any, type: "url" | "json"): string;
export declare function paramformat(obj: any, type: "formData"): FormData;
