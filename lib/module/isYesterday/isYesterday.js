/**
 * 判断是否是昨天
 * @param date
 * @param options
 * @returns {boolean}
 * @version 2.6.0
 */
export const isYesterday = (date) => {
    if (!date)
        throw new Error('date is required');
    const dateStr = new Date(date);
    const yesterday = new Date(new Date().getTime() - 86400000);
    return (dateStr.getFullYear() === yesterday.getFullYear() &&
        dateStr.getMonth() === yesterday.getMonth() &&
        dateStr.getDate() === yesterday.getDate());
};
