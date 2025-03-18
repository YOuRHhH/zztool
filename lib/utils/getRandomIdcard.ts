/**
 * 
 * @returns 随机生成身份证号
 */
export function getRandomIdcard() {
  const provinceCodes = [
    "11", "12", "13", "14", "15", "21", "22", "23", "31", "32", "33", "34", "35", "36", "37",
    "41", "42", "43", "44", "45", "46", "50", "51", "52", "53", "54", "61", "62", "63", "64", "65",
    "71", "81", "82", "91"
  ];

  // 随机省市区 6 位
  const province = provinceCodes[Math.floor(Math.random() * provinceCodes.length)];
  const city = String(Math.floor(1000 + Math.random() * 8999)).substring(0, 2);
  const district = String(Math.floor(1000 + Math.random() * 8999)).substring(0, 2);
  const addressCode = province + city + district;

  // 随机生日（1900年 - 2022年）
  const year = String(Math.floor(Math.random() * (2022 - 1900 + 1)) + 1900);
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const day = (() => {
    const daysInMonth = new Date(Number(year), Number(month), 0).getDate();
    return String(Math.floor(Math.random() * daysInMonth) + 1).padStart(2, '0');
  })();
  const birth = year + month + day;

  // 顺序码（3位）
  const seq = String(Math.floor(Math.random() * 999)).padStart(3, '0');

  // 前17位
  const id17 = addressCode + birth + seq;

  // 计算校验码
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const checkCodes = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += Number(id17[i]) * weights[i];
  }
  const checkCode = checkCodes[sum % 11];

  return id17 + checkCode;
}