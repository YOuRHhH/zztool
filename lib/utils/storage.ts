/**
 * 取值（支持多层）
 * @param {string} key
 * @returns 
 * @example
 * // 调用示例
 * getStorage('user.name');
 */
export const getStorage = (key: string): any => {
  try {
    const keys = key.split('.');
    let data = JSON.parse(localStorage.getItem(keys[0]) || 'null');
    for (let i = 1; i < keys.length; i++) {
      if (data == null) return null;
      data = data[keys[i]];
    }
    return data;
  } catch (e) {
    console.error('getStorage:', e);
    return null;
  }
};

/**
 * 存值（支持多层）
 * @param {string} key 
 * @param {*} val 
 * @returns 
 * @example
 * // 调用示例
 * setStorage('user.name', 'yourname');
 */
export const setStorage = (key: string, val: any) => {
  try {
    const keys = key.split('.');
    if (keys.length === 1) {
      localStorage.setItem(keys[0], JSON.stringify(val));
      return;
    }

    // 读到顶级对象
    let data = JSON.parse(localStorage.getItem(keys[0]) || '{}');

    let temp = data;
    for (let i = 1; i < keys.length - 1; i++) {
      if (typeof temp[keys[i]] !== 'object' || temp[keys[i]] === null) {
        temp[keys[i]] = {};
      }
      temp = temp[keys[i]];
    }
    temp[keys[keys.length - 1]] = val;

    localStorage.setItem(keys[0], JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('setStorage:', e);
  }
};

/**
 * 删除（支持多层）
 * @param {string} key
 * @returns
 * @example
 * // 调用示例
 * removeStorage('user.name');
 */
export const removeStorage = (key: string) => {
  try {
    const keys = key.split('.');
    if (keys.length === 1) {
      localStorage.removeItem(keys[0]);
      return;
    }

    let data = JSON.parse(localStorage.getItem(keys[0]) || 'null');
    if (data == null) return;

    let temp = data;
    for (let i = 1; i < keys.length - 1; i++) {
      if (typeof temp[keys[i]] !== 'object' || temp[keys[i]] === null) {
        return;
      }
      temp = temp[keys[i]];
    }

    delete temp[keys[keys.length - 1]];
    localStorage.setItem(keys[0], JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('removeStorage:', e);
  }
};