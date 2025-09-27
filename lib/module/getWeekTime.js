/**
 * 获取当前周的日期列表
 * @param date 可选，指定日期，默认当前日期
 * @returns 当前周的所有日期（从周一开始）
 */
export function getWeekTime(date = new Date()) {
    date = date instanceof Date ? date : new Date(date);
    if (isNaN(date.getTime()))
        return [];
    const now = new Date(date);
    const dayOfWeek = now.getDay() || 7;
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - dayOfWeek + 1);
    return Array.from({ length: 7 }, (_, i) => {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        return day.toISOString().split("T")[0];
    });
}
