export function getRandom(min, max) {
    // 获取参数长度 进行特殊处理
    const hasParam = arguments.length;
    if (!hasParam) {
        return Math.random();
    }
    if (min !== undefined && max !== undefined) {
        if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) {
            throw new Error("Invalid param min <= max and type must be number");
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return 0;
}
