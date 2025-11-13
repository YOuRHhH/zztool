import * as zztool from "../dist/zztool.es.js";
const data = {a:1,b:[{c:1},{c:2}]}
const data1 = {a:1,b:[{c:1},{c:1}]}
console.log(zztool.equal(data,data1,{
    returnKeys:true,
    // arrayDiff:true
}))


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