
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
export function getAllCombinations (str:string,type=1):string[]|string {
  if(type === 1){
    return allCombinations(str)
  }else if(type === 2){
    return allPermutations(str)
  }else if(type === 3){
    return allPalindromes(str)
  }
  return []
}

function allCombinations(str:string):any[] {
  function* allCombinationsLazy(str:string) {
    for (let i = 0; i < str.length; i++) {
      let combo = "";
      for (let j = i; j < str.length; j++) {
        combo += str[j];
        yield combo; // 只在需要时返回一个结果
      }
    }
  }
  const arr = [];
  for (const s of allCombinationsLazy(str)) {
    arr.push(s);
  }
  return arr;
}
function allPermutations(str:string):string[] {
  const result:string[] = [str]; 
  return result;

}
// Manacher 算法
function allPalindromes(s:string):string {
  if (!s || s.length < 1) return "";

  const t = "^#" + s.split("").join("#") + "#$";
  const n = t.length;
  const P = new Array(n).fill(0);

  let center = 0, right = 0;
  let maxLen = 0, maxCenter = 0;

  for (let i = 1; i < n - 1; i++) {
    let mirror = 2 * center - i;

    if (i < right) {
      P[i] = Math.min(right - i, P[mirror]);
    }

    while (t[i + 1 + P[i]] === t[i - 1 - P[i]]) {
      P[i]++;
    }

    if (i + P[i] > right) {
      center = i;
      right = i + P[i];
    }

    if (P[i] > maxLen) {
      maxLen = P[i];
      maxCenter = i;
    }
  }

  const start = (maxCenter - maxLen) / 2;
  return s.substring(start, start + maxLen);
}