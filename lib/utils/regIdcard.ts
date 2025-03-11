/**
 * 判断是否为身份证
 * @param str 字符串
 * @returns 是否为身份证
 */
export function regIdcard(str: string) {
  if (!/^\d{17}(\d|X)$/i.test(str)) return false;

  const provinceCodes = new Set([
    "11", "12", "13", "14", "15", "21", "22", "23", "31", "32", "33", "34", "35", "36", "37",
    "41", "42", "43", "44", "45", "46", "50", "51", "52", "53", "54", "61", "62", "63", "64", "65",
    "71", "81", "82", "91"
  ]);
  if (!provinceCodes.has(str.substring(0, 2))) return false;
  
  const year = parseInt(str.substring(6, 10), 10);
  const month = parseInt(str.substring(10, 12), 10);
  const day = parseInt(str.substring(12, 14), 10);

  const birthDate = new Date(year, month - 1, day);
  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() + 1 !== month ||
    birthDate.getDate() !== day
  ) {
    return false;
  }
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const checkCodes = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += Number(str[i]) * weights[i];
  }
  const calculatedCheckCode = checkCodes[sum % 11];
  if (str[17].toUpperCase() !== calculatedCheckCode) {
    return false;
  }

  return true;
}