import * as zztool from "../dist/zztool.es.js";
function stripEmpty(obj, option) {
    if (typeof obj !== "object" || !obj || obj === null) {
        return obj;
    }
    const { checkEmptyFn, filterArray = true } = option || {};
    const checkEmpty = checkEmptyFn || defaultCheckEmpty;
    for (const key in obj) {
        const value = obj[key];
        const type = getType(value);
        if (type === 'object') {
            stripEmpty(value, option);
            // 检查对象是否为空
            if (checkEmpty(value)) {
                delete obj[key];
            }
        }
        else if (type === 'array' && filterArray) {
            // 先递归处理数组中的每个元素
            for (let i = 0; i < value.length; i++) {
                stripEmpty(value[i], option);
            }
            // 然后过滤数组
            obj[key] = arrayTrim(value);
            // 检查数组是否为空
            if (checkEmpty(obj[key])) {
                delete obj[key];
            }
        }
        else if (checkEmpty(value)) {
            delete obj[key];
        }
    }
    return obj;
}

      const input = {
        users: [
          { name: 'John', age: 30, tags: ['', 'admin', ''], profile: {} },
          { name: '', age: null, tags: [], profile: { avatar: '' } },
          { name: 'Jane', age: 25, tags: ['user'], profile: { avatar: 'pic.jpg' } }
        ],
        settings: { theme: '', notifications: true, emptyObj: {} },
        emptyArr: []
      };
const result = stripEmpty(input);
console.log(JSON.stringify(result))

function arrayTrim(data) {
    if (!Array.isArray(data))
        return data;
    return data.filter((item) => {
        return !defaultCheckEmpty(item);
    });
}

function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}


function defaultCheckEmpty(value) {
    if (value == null)
        return true;
    if (getType(value) === "string")
        return value.trim() === "";
    if (getType(value) === "number" ||
        getType(value) === "boolean" ||
        getType(value) === "date" ||
        getType(value) === "function" ||
        getType(value) === "regexp")
        return false;
    if (Array.isArray(value))
        return value.length === 0;
    if (typeof value === "object")
        return Object.keys(value).length === 0;
    return false;
}