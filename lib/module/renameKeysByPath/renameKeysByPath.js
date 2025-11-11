import { toArray } from "../toArray/toArray";
/**
 * 修改对象中的下标
 * index和newIndex必须是字符串，多个下标用逗号分隔
 * @param {*} data
 * @param {*} index
 * @param {*} newIndex
 * @returns {object}
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * renameKeysByPath({ a: { b: { c: 1 },c:1 } }, "a.c,a.b.c", "a.xxx,a.b.xxx") // { a: { b: { xxx: 1 }, xxx:1 } }
 */
export function renameKeysByPath(data, index, newIndex) {
    if (typeof data !== "object" || isEmptyObject(data) || !data || !index || !newIndex) {
        throw new Error("Invalid param.");
    }
    const indexArr = toArray(index, ",");
    const newIndexArr = toArray(newIndex, ",");
    if (indexArr.length !== newIndexArr.length) {
        throw new Error("index and newIndex length must be equal");
    }
    const newData = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < indexArr.length; i++) {
        const oldPathStr = indexArr[i];
        const newPathStr = newIndexArr[i];
        const oldPath = parsePathString(oldPathStr);
        const newPath = parsePathString(newPathStr);
        if (oldPath.length === 0 || newPath.length === 0) {
            throw new Error("Invalid path");
        }
        const oldParentParts = oldPath.slice(0, -1);
        const newParentParts = newPath.slice(0, -1);
        if (!arraysEqual(oldParentParts, newParentParts)) {
            continue;
            //   throw new Error(`Path parent mismatch: ${oldPathStr} vs ${newPathStr}`);
        }
        const { parent: oldParent, key: oldKey } = getParentAndKey(newData, oldPath);
        const newKey = newPath[newPath.length - 1];
        if (oldParent === null || typeof oldParent !== 'object') {
            throw new Error(`Path parent is invalid`);
        }
        if (oldParent.hasOwnProperty(newKey)) {
            throw new Error(`Key "newKey" already exists, cannot rename "oldKey"`);
        }
        if (!oldParent.hasOwnProperty(oldKey)) {
            continue; // 旧键不存在，跳过
        }
        oldParent[newKey] = oldParent[oldKey];
        delete oldParent[oldKey];
    }
    return newData;
}
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
function parsePathString(path) {
    const parts = [];
    const regex = /([^[\]]+)|(\[\d+\])/g;
    let matches;
    while ((matches = regex.exec(path)) !== null) {
        let part = matches[0];
        if (part.startsWith('[')) {
            const index = parseInt(part.slice(1, -1), 10);
            parts.push(index);
        }
        else {
            part.split('.').forEach(p => {
                if (p)
                    parts.push(p);
            });
        }
    }
    return parts;
}
function getParentAndKey(data, pathArray) {
    let current = data;
    const parentPath = pathArray.slice(0, -1);
    const key = pathArray[pathArray.length - 1];
    for (const part of parentPath) {
        if (typeof current !== 'object' || current === null) {
            throw new Error(`Invalid path,unable to access properties ${part}`);
        }
        if (typeof part === 'number') {
            if (!Array.isArray(current)) {
                throw new Error(`Path expects array but obtains other types`);
            }
            if (part < 0 || part >= current.length) {
                throw new Error(`Array Index Overflow: ${part}`);
            }
            current = current[part];
        }
        else {
            if (!current.hasOwnProperty(part)) {
                throw new Error(`attribute ${part} not exist`);
            }
            current = current[part];
        }
    }
    return { parent: current, key };
}
function arraysEqual(a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
