/**
 * 获取日期信息
 * @param str 日期字符串或 Date 对象，可为空
 * @returns {year,month,day,hour,minute,second}
 */
export function getDateInfo(str) {
    let formattedStr = str;
    // 兼容ios
    if (typeof str === "string" && str.includes("-")) {
        formattedStr = str.replace(/-/g, "/");
    }
    const date = formattedStr ? new Date(formattedStr) : new Date();
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date format");
    }
    const pad = (num) => num.toString().padStart(2, "0");
    return {
        year: date.getFullYear().toString(),
        month: pad(date.getMonth() + 1),
        day: pad(date.getDate()),
        hour: pad(date.getHours()),
        minute: pad(date.getMinutes()),
        second: pad(date.getSeconds()),
    };
}
