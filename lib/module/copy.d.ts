/**
 * 复制到剪切板
 * @param text
 * @returns Promise<boolean> 成功返回 true，失败返回 false
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @version 2.6.0
 * @example
 * copy('https://yourhhh.github.io/zztoolDocument')
 */
export declare function copy(text: string): Promise<boolean>;
