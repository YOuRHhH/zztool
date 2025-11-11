export function replaceAll(str, target, replacement) {
    return str.replace(new RegExp(target, "g"), replacement);
}
