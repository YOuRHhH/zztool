/**
 * 随机生成合法美国社会保障号（SSN）
 * 格式：AAA-BB-CCCC
 */
export declare function usaGenerateSSN(): string;
/**
 * 校验美国 SSN 是否合法
 * @param ssn 输入的 SSN 字符串
 * @returns 是否合法
 */
export declare function usaValidateSSN(ssn: string): boolean;
