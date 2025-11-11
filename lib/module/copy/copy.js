var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * 复制到剪切板
 * @param text
 * @returns Promise<boolean> 成功返回 true，失败返回 false
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @version 2.6.0
 * @example
 * copy('https://yourhhh.github.io/zztoolDocument')
 */
export function copy(text) {
    return __awaiter(this, void 0, void 0, function* () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                yield navigator.clipboard.writeText(text);
                return true;
            }
            catch (err) {
                console.error('复制失败', err);
                return false;
            }
        }
        else {
            // 兼容老浏览器
            return fallbackCopyTextToClipboard(text);
        }
    });
}
/** 兼容写法 */
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '1px';
    textArea.style.height = '1px';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
    }
    catch (err) {
        console.error('复制失败', err);
        document.body.removeChild(textArea);
        return false;
    }
}
