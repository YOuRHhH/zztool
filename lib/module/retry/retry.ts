/**
 * 重试
 * @param cb 
 * @param times 
 * @param delay 
 */
export function retry(cb:Function,times:number=3,delay:number=1000){
  return new Promise((resolve, reject) => {
    const retry = (n:number) => {
      cb().then(resolve).catch((err:any) => {
        if(n > 0){
          setTimeout(() => {
            retry(n - 1);
          }, delay);
        } else {
          reject(err);
        }
      });
    };
    retry(times);
  });
}