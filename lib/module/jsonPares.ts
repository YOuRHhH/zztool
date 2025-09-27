/**
 * json解析
 * @param {string} json 
 * @returns 
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @note json解析 `JSON.parse`
 * @example
 * // 调用示例
 * jsonParse('{"a":1,"b":2}') // {a:1,b:2}
 */
export function jsonParse(json: string): any { 
  try{
    return JSON.parse(json);
  }catch(e){
    console.log("[jsonParse] warning:",e)
    return json;
  }
}