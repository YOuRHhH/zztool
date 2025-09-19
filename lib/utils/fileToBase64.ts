/**
 * 文件转base64
 * @param input 文件
 * @warning 支持本地图片/文件(支持网络图片/文件)  不支持node环境，base64太大了
 * @returns 
 */
export async function fileToBase64(input: File | Blob | string): Promise<string> {
  // url
  if (typeof input === "string") {
    try {
      const response = await fetch(input);
      if (!response.ok) throw new Error(`请求失败：${input}`);
      const blob = await response.blob();
      return blobToBase64(blob);
    } catch (err) {
      // 使用<img>解决图片跨域 如果图片放到img无法访问就会失败
      return urlImageToBase64(input);
    }
  }

  return blobToBase64(input);
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(blob);
  });
}

function urlImageToBase64(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Cannot get canvas context"));
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      } catch (e) {
        reject(e);
      }
    };
    img.onerror = () => reject(new Error(`加载失败：${url}`));
  });
}