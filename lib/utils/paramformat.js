/**
 * 参数格式化
 * @description 参数格式化 node环境需要引入 `form-data` 包
 * @param obj 参数
 * @param type 类型
 * @returns 格式化后的参数
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * console.log(paramformat({ a: 1, b: 2 }, "url")); // a=1&b=2
 */
export function paramformat(obj, type = "url") {
    var _a;
    if (!obj || typeof obj !== "object")
        return "";
    if (type === "url") {
        return Object.keys(obj)
            .map((key) => { var _a; return `${encodeURIComponent(key)}=${encodeURIComponent((_a = obj[key]) !== null && _a !== void 0 ? _a : "")}`; })
            .join("&");
    }
    if (type === "json") {
        return JSON.stringify(obj);
    }
    if (type === "formData") {
        // if (isNode) {
        //   // 在 Node.js 环境中使用 `form-data` 包
        //   const FormData = require("form-data");
        //   const formData = new FormData();
        //   for (const key in obj) {
        //     formData.append(key, obj[key] ?? "");
        //   }
        //   return formData;
        // } else {
        const formData = new FormData();
        for (const key in obj) {
            formData.append(key, (_a = obj[key]) !== null && _a !== void 0 ? _a : "");
        }
        return formData;
        // }
    }
}
