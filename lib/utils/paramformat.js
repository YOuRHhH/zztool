/**
 * 参数格式化
 * @param obj 参数
 * @param type 类型
 * @returns 格式化后的参数
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
        const formData = new FormData();
        for (const key in obj) {
            formData.append(key, (_a = obj[key]) !== null && _a !== void 0 ? _a : "");
        }
        return formData;
    }
}
