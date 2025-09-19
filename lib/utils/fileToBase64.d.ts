/**
 * 文件转base64
 * @param input 文件
 * @note 支持本地图片/文件(支持网络图片/文件)  不支持node环境，base64太大了
 * @returns
 */
export declare function fileToBase64(input: File | Blob | string): Promise<string>;
