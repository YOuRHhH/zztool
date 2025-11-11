import { setStorage, removeStorage, getStorage } from '../storage/storage'
const keyStr = 'onceStorage_';
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

export function onceStorage(key:string,value:any):any{
  try{
    const UUID = keyStr+key;
    if(getStorage(UUID)){
      const stroageValue = getStorage(UUID);
      removeStorage(UUID);
      return JSON.parse(stroageValue)
    }else{
      const newVal = JSON.stringify(value)
      setStorage(UUID,newVal);
      return newVal;
    }
  }catch(e){
    throw e;
  }
}
/**
 * 获取一次性缓存数据
 * @param key 
 * @note 获取后不会自动清除
 * @returns 
 */
export function getOnceStorage(key:string):any{
  return getStorage(keyStr+key)
}
/**
 * 获取所有一次性缓存数据
 * @returns {Array<Object>}
 */
export function getAllOnceStorage():Array<{key:string,value:any}>{
  const onceStorageKeys = Object.keys(localStorage).filter(item=>item.startsWith(keyStr))
  if(!onceStorageKeys.length) return []
  return onceStorageKeys.map((keyIndex:string) => {
    const key = keyIndex.replace(keyStr,'');
    const value = JSON.parse(getStorage(key))
    return {key,value}
  })
}
/**
 * 移出一次性缓存数据
 * @param key 
 * @returns 
 */
export function removeOnceStorage(key:string){ 
  try{
    return removeStorage(keyStr+key)
  }catch(e){
    throw e;
  }
}
/**
 * 移出所有一次性缓存数据
 */
export function removeAllOnceStorage(){
  const onceStorageKeys = Object.keys(localStorage).filter(item=>item.startsWith(keyStr))
  onceStorageKeys.forEach(item=>removeStorage(item))
}
