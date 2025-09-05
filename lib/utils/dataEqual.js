export function dataEqual(obj1, obj2, options = {}) {
    const defaultOptions = { returnKeys: false, arrayDiff: true };
    const { returnKeys, arrayDiff } = Object.assign(Object.assign({}, defaultOptions), options);
    function isObject(value) {
        return value && typeof value === "object" && !Array.isArray(value);
    }
    function compareRecursive(obj1, obj2, parentKey = "") {
        if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
            throw new Error("Both arguments must be objects or arrays.");
        }
        const differingKeys = [];
        const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
        keys.forEach((key) => {
            const fullKey = parentKey ? `${parentKey}.${key}` : key;
            const val1 = obj1[key];
            const val2 = obj2[key];
            if (isObject(val1) && isObject(val2)) {
                differingKeys.push(...compareRecursive(val1, val2, fullKey));
            }
            else if (Array.isArray(val1) && Array.isArray(val2)) {
                if (arrayDiff) {
                    const maxLength = Math.max(val1.length, val2.length);
                    for (let i = 0; i < maxLength; i++) {
                        const v1 = val1[i];
                        const v2 = val2[i];
                        const arrKey = `${fullKey}.${i}`;
                        if (isObject(v1) && isObject(v2)) {
                            differingKeys.push(...compareRecursive(v1, v2, arrKey));
                        }
                        else if (v1 !== v2) {
                            differingKeys.push(arrKey);
                        }
                    }
                }
            }
            else if (val1 !== val2) {
                differingKeys.push(fullKey);
            }
        });
        return differingKeys;
    }
    const result = compareRecursive(obj1, obj2);
    return returnKeys ? result : result.length > 0;
}
