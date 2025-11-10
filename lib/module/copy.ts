import { isHttps } from "../utils/public"
/**
 * 复制到剪切板
 * @param text 
 * @returns Promise<boolean> 成功返回 true，失败返回 false
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @version 2.6.0
 * @example
 * copy('https://yourhhh.github.io/zztoolDocument')
 */
export async function copy(text: string): Promise<boolean> {
  if (isHttps && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (err) {
      console.error('复制失败', err)
      return false
    }
  } else {
    // 兼容老浏览器
    return fallbackCopyTextToClipboard(text)
  }
}

/** 兼容写法 */
function fallbackCopyTextToClipboard(text: string): boolean {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  textArea.style.top = '0'
  textArea.style.left = '0'
  textArea.style.width = '1px'
  textArea.style.height = '1px'
  textArea.style.padding = '0'
  textArea.style.border = 'none'
  textArea.style.outline = 'none'
  textArea.style.boxShadow = 'none'
  textArea.style.background = 'transparent'

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    const successful = document.execCommand('copy')
    document.body.removeChild(textArea)
    return successful
  } catch (err) {
    console.error('复制失败', err)
    document.body.removeChild(textArea)
    return false
  }
}
