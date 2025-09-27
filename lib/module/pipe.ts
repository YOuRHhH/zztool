/**
 * 管道函数
 * @param {*} ...args 函数参数
 * @returns
 * @see {@link https://yourhhh.github.io/zztoolDocument/#pick} API 文档
 * @example
 * const add2 = (x) => x + 2;
 * const multiply3 = (x) => x * 3;
 * const result = pipe(add2, multiply3)(5);
 * console.log(result); // (5 + 2) * 3 = 21
 */
export function pipe(...args:any[]){
  if(args.length === 0) return args[0]
  return function(...args2:any[]){
    return args.reduce((prev, cur) => cur(prev), args2[0])
  }
}