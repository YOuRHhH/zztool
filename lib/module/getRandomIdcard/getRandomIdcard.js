import idCarInfo from "../../utils/idCardInfo";
/**
 * @param yearMin 最小值
 * @param yearMax 最大值
 * @returns 随机生成身份证号
 */
export function getRandomIdcard(yearMin = 1000, yearMax = 9999) {
    const provinceCodes = idCarInfo.code;
    // 随机省市区 6 位
    const province = provinceCodes[Math.floor(Math.random() * provinceCodes.length)];
    const city = String(Math.floor(1000 + Math.random() * 8999)).substring(0, 2);
    const district = String(Math.floor(1000 + Math.random() * 8999)).substring(0, 2);
    const addressCode = province + city + district;
    // 随机年份
    const year = String(Math.floor(Math.random() * (yearMax - yearMin + 1)) + yearMin);
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
    const weights = idCarInfo.weights;
    const checkCodes = idCarInfo.checkCodes;
    let sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += Number(id17[i]) * weights[i];
    }
    const checkCode = checkCodes[sum % 11];
    return id17 + checkCode;
}
