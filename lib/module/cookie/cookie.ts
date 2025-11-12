/**
 * 获取指定 cookie 值
 * @param name cookie 名称
 * @returns cookie 值，如果不存在返回 ''
 * @version 2.6.0
 */
export function getCookie(name: string): string {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`
  ));
  return matches ? JSON.parse(decodeURIComponent(matches[1])) : '';
}
/**
 * 设置 cookie
 * @param name cookie 名称
 * @param value cookie 值
 * @param options 可选配置 { expires, path, domain, secure, sameSite }
 * @note 
 * @version 2.6.0
 */
export function setCookie(
  name: string,
  value: any,
  options: {
    expires?: number, // 天数或具体日期
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite?: 'Strict' | 'Lax' | 'None'
  } = {}
) {
  let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(JSON.stringify(value))}`;

  if (options.expires) {
    let expires: string;
    const d = new Date();
    d.setTime(d.getTime() + options.expires);
    expires = d.toUTCString();
    // 不知道怎么设计方便，就先让使用者传入毫秒级时间,后续更新设计用户可以初始化设置默认天数
    // if (typeof options.expires === 'number') {
    //   const d = new Date();
    //   d.setTime(d.getTime() + options.expires * 24 * 60 * 60 * 1000);
    //   expires = d.toUTCString();
    // } else {
    //   expires = options.expires.toUTCString();
    // }
    cookieStr += `; expires=${expires}`;
  }

  if (options.path) cookieStr += `; path=${options.path}`;
  if (options.domain) cookieStr += `; domain=${options.domain}`;
  if (options.secure) cookieStr += `; secure`;
  if (options.sameSite) cookieStr += `; samesite=${options.sameSite}`;

  document.cookie = cookieStr;
}
/**
 * 删除指定 cookie
 * @param name cookie 名称
 * @param path 可选，cookie 的 path
 * @version 2.6.0
 */
export function removeCookie(name: string, path?: string) {
  document.cookie = `${encodeURIComponent(name)}=; expires=${new Date(0).toUTCString()}${path ? `; path=${path}` : ''}`;
}