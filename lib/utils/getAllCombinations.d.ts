/**
 * 获取所有组合/排列组合
 * @param {String} str 字符串
 * @param {Number} type 1:组合 2:排列组合
 * @returns {string[]}
 * @see {@link https://yourhhh.github.io/zztoolDocument} zztool API 文档
 * @note
 * 1：组合-所有的组合，例如：abc => a,b,c,ab,ac,bc,abc,...
 * 2：排列组合-所有的排列组合，例如：abc => a,b,c,ab,ac,bc,abc,bac,bca,cab,cba,...
 * 3: 最长回文 // Manacher 算法
 */
export declare function getAllCombinations(str: string, type?: number): string[] | string;
