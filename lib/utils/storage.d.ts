/**
 * 取值（支持多层）
 * @param {string} key
 * @returns
 * @example
 * // 调用示例
 * getStorage('user.name');
 */
export declare const getStorage: (key: string) => any;
/**
 * 存值（支持多层）
 * @param {string} key
 * @param {*} val
 * @returns
 * @example
 * // 调用示例
 * setStorage('user.name', 'yourname');
 */
export declare const setStorage: (key: string, val: any) => void;
/**
 * 删除（支持多层）
 * @param {string} key
 * @returns
 * @example
 * // 调用示例
 * removeStorage('user.name');
 */
export declare const removeStorage: (key: string) => void;
