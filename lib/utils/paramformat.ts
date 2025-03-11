import { isNode } from "./public";
/**
 * 参数格式化
 * @description 参数格式化 node环境需要引入 `form-data` 包
 * @param obj 参数
 * @param type 类型
 * @returns 格式化后的参数
 */
export function paramformat(obj: any, type = "url") {
  if (!obj || typeof obj !== "object") return "";
  if (type === "url") {
    return Object.keys(obj)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(obj[key] ?? "")}`
      )
      .join("&");
  }
  if (type === "json") {
    return JSON.stringify(obj);
  }
  if (type === "formData") {
    if (isNode) {
      // 在 Node.js 环境中使用 `form-data` 包
      const FormData = require("form-data");
      const formData = new FormData();
      for (const key in obj) {
        formData.append(key, obj[key] ?? "");
      }
      return formData;
    } else {
      const formData = new FormData();
      for (const key in obj) {
        formData.append(key, obj[key] ?? "");
      }
      return formData;
    }
  }
}
