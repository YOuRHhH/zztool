/**
 * 随机生成合法美国社会保障号（SSN）
 * 格式：AAA-BB-CCCC
 */
export function usaGenerateSSN(): string {
  let area: number;
  do {
    area = Math.floor(Math.random() * 900);
  } while (area === 0 || area === 666 || area >= 900);

  let group = Math.floor(Math.random() * 100);
  if (group === 0) group = 1;

  let serial = Math.floor(Math.random() * 10000);
  if (serial === 0) serial = 1;

  return `${String(area).padStart(3,'0')}-${String(group).padStart(2,'0')}-${String(serial).padStart(4,'0')}`;
}
/**
 * 校验美国 SSN 是否合法
 * @param ssn 输入的 SSN 字符串
 * @returns 是否合法
 */
export function usaValidateSSN(ssn: string): boolean {
  // 格式检查
  const match = ssn.match(/^(\d{3})-(\d{2})-(\d{4})$/);
  if (!match) return false;

  const area = Number(match[1]);
  const group = Number(match[2]);
  const serial = Number(match[3]);

  // 不允许非法组合
  if (area === 0 || area === 666 || area >= 900) return false;
  if (group === 0) return false;
  if (serial === 0) return false;

  return true;
}