/**
 * 判断是否是今天
 * @param date
 * @param options
 * @returns {boolean}
 * @version 2.6.0
 */
export const isToday = (date) => {
    if (!date)
        throw new Error('date is required');
    const nowDate = new Date().toISOString().split('T')[0];
    const dateStr = new Date(date).toISOString().split('T')[0];
    return dateStr === nowDate;
};
