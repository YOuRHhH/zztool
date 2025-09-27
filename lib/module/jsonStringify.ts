/**
 * json字符串化
 * @param {*} json 
 * @returns 
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @note json字符串化 `JSON.stringify`
 * @example
 * // 调用示例
 * jsonStringify({a:1,b:2}) // '{"a":1,"b":2}'
 */
export function jsonStringify(json:any): string { 
  try{
    return JSON.stringify(json);
  }catch(e){
    console.log("[jsonStringify] warning:",e)
    return json;
  }
}