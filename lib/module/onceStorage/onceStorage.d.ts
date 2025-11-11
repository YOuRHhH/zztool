/**
 * 一次性缓存数据
 * @param {string} key 缓存key
 * @param {any} value 缓存值
 * @returns {any}
 * @see {@link https://yourhhh.github.io/zztoolDocument/#onceStorage} API 文档
 * @note
 * - 存储/获取
 * - 一次性缓存数据，获取后自动删除
 * @example
 * onceStorage('key',value)
 * console.log(onceStorage('key'))
 */
export declare function onceStorage(key: string, value: any): any;
/**
 * 获取一次性缓存数据
 * @param key
 * @note 获取后不会自动清除
 * @returns
 */
export declare function getOnceStorage(key: string): any;
/**
 * 获取所有一次性缓存数据
 * @returns {Array<Object>}
 */
export declare function getAllOnceStorage(): Array<{
    key: string;
    value: any;
}>;
/**
 * 移出一次性缓存数据
 * @param key
 * @returns
 */
export declare function removeOnceStorage(key: string): true | undefined;
/**
 * 移出所有一次性缓存数据
 */
export declare function removeAllOnceStorage(): void;
