/**
 * 获取url参数
 * @description node环境下参数必填
 * @param url url
 * @returns 参数
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @note 可以使用 URLSearchParams 代替
 * @example
 * // 调用示例
 * getUrlParam(); // 获取当前页面参数
 * getUrlParam<{ a: string; b: number }>(); // 指定返回类型
 */
export declare function getUrlParam<T extends Record<string, any> = Record<string, string>>(url?: string): T;
