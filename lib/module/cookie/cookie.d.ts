/**
 * 获取指定 cookie 值
 * @param name cookie 名称
 * @returns cookie 值，如果不存在返回 ''
 * @version 2.6.0
 */
export declare function getCookie(name: string): string;
/**
 * 设置 cookie
 * @param name cookie 名称
 * @param value cookie 值
 * @param options 可选配置 { expires, path, domain, secure, sameSite }
 * @note
 * @version 2.6.0
 */
export declare function setCookie(name: string, value: any, options?: {
    expires?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
}): void;
/**
 * 删除指定 cookie
 * @param name cookie 名称
 * @param path 可选，cookie 的 path
 * @version 2.6.0
 */
export declare function removeCookie(name: string, path?: string): void;
