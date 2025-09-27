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
 * 文件转base64
 * @param input 文件
 * @warning 支持本地图片/文件(支持网络图片/文件)  不支持node环境，base64太大了
 * @returns
 */
export function fileToBase64(input) {
    return __awaiter(this, void 0, void 0, function* () {
        // url
        if (typeof input === "string") {
            try {
                const response = yield fetch(input);
                if (!response.ok)
                    throw new Error(`requeest fail: ${input}`);
                const blob = yield response.blob();
                return blobToBase64(blob);
            }
            catch (err) {
                // 使用<img>解决图片跨域 如果图片放到img无法访问就会失败
                return urlImageToBase64(input);
            }
        }
        return blobToBase64(input);
    });
}
function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(blob);
    });
}
function urlImageToBase64(url) {
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
                if (!ctx)
                    return reject(new Error("Cannot get canvas context"));
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL("image/png"));
            }
            catch (e) {
                reject(e);
            }
        };
        img.onerror = () => reject(new Error(`load fail：${url}`));
    });
}
