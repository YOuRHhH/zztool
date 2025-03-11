/**
 * 数组去空
 * @param data 数组
 */
export function arrayTrim(data: any[]) {
  if (!Array.isArray(data)) return data;
  return data.filter((item) => item);
}