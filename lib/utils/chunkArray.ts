/**
 * 数组分块
 * 将数组分成size块
 * @param data 数组
 * @param size 大小
 */
export function chunkArray(data: any[], size: number): any[] {
  if (!Array.isArray(data) || data.length === 0 || size <= 0 || size > data.length) {
    throw new Error("Invalid input data or size.");
  }
  const result: any[] = [];
  const lng = Math.ceil(data.length / size);
  for (let i = 0; i < size; i++) {
    result.push(data.slice(i * lng, (i + 1) * lng));
  }
  return result;
}