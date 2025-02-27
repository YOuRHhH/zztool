export function replaceAll(
  str: string,
  target: string,
  replacement: string
): string {
  return str.replace(new RegExp(target, "g"), replacement);
}