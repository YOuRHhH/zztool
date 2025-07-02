/**
 * 获取storage
 * 仅支持两层
 * @param key 
 * @returns
 * @example
 * getStorage('user.name')
 * getStorage('user')
 */
export const getStorage = (key:string) => {
  try{
    const keys = key.split('.');
    if(keys.length > 1){
      const storage = localStorage.getItem(keys[0]);
      return storage ? JSON.parse(storage)[keys[1]] : null
    }else{
      return JSON.parse(localStorage.getItem(key) as string);
    }
  }catch(e){
    console.error('getStorage: ',e)
  }
};

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
export const setStorage = (key:string, val:any) => {
  try{
    const keys = key.split('.')
    if(keys.length > 1){
      const storage = getStorage(keys[0]) || {} // 获取storage
      storage[keys[1]] = val;
      localStorage.setItem(keys[0], JSON.stringify(storage));
    }else{
      localStorage.setItem(key, JSON.stringify(val));
    }
  }catch(e){
    console.error('setStorage: ',e)
  }
};

/**
 * 移出storage
 * 仅支持两层
 * @param key 
 * @example
 * removeStorage('key')
 */
export const removeStorage = (key:string) => {
  try{
    const keys = key.split('.');
    if(keys.length > 1){
      const storage = getStorage(keys[0]);
      delete storage[keys[1]];
      setStorage(keys[0], storage);
    }else{
      localStorage.removeItem(key);
    }
  }catch(e){
    console.error('removeStorage: ',e)
  }
};