/**
 * 获取时间段
 * @param {*} start 开始时间
 * @param {*} end 结束时间
 * @param {*} step 步长
 * @param {*} type hh:mm:ss hh:mm
 * @returns
 */
export function getTimeStep(
  start: string,
  end: string,
  step: any = "01:00",
  type: any = "hh:mm"
) {
  // 验证时间格式是否正确
  const isValidTime = (time: string) => /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.test(time);
  if(![start,end,step].every(isValidTime)){
    throw new Error("Invalid time format. Expected 'hh:mm' or 'hh:mm:ss'");
  }
  const toSeconds = (time: string) =>
    time
      .split(":")
      .map(Number)
      .reduce((a, v, i) => a + v * [3600, 60, 1][i], 0);
  const format = (time: number) =>
    [Math.floor(time / 3600), Math.floor((time % 3600) / 60), time % 60]
      .map((v) => String(v).padStart(2, "0"))
      .join(":");

  const startTime = toSeconds(start);
  const endTime = toSeconds(end);
  const stepTime = toSeconds(step);

  if (startTime > endTime) {
    throw new Error("Start time cannot be greater than end time.");
  }

  const result = [];
  for (let time = startTime; time <= endTime; time += stepTime) {
    result.push(type === "hh:mm:ss" ? format(time) : format(time).slice(0, 5));
  }

  return result;
}