/**
 * 重试
 * @param cb
 * @param times
 * @param delay
 */
export function retry(cb, times = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const retry = (n) => {
            cb().then(resolve).catch((err) => {
                if (n > 0) {
                    setTimeout(() => {
                        retry(n - 1);
                    }, delay);
                }
                else {
                    reject(err);
                }
            });
        };
        retry(times);
    });
}
