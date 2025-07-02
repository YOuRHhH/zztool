/**
 * 获取storage
 * 仅支持两层
 * @param key
 * @returns
 * @example
 * getStorage('user.name')
 * getStorage('user')
 */
export declare const getStorage: (key: string) => any;
/**
 * 设置storage
 * 仅支持两层
 * @param key
 * @param val
 * @example
 * // 调用示例
 * const arr = [1];
 * setStorage('user',arr);
 * const info = {name:'Tom'};
 * setStorage('user.info',info);
 */
export declare const setStorage: (key: string, val: any) => void;
/**
 * 移出storage
 * 仅支持两层
 * @param key
 * @example
 * removeStorage('key')
 */
export declare const removeStorage: (key: string) => void;
