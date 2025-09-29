<script setup lang="ts">
import { isEmpty,pick } from '../lib';
import {generateLargeComplexObject} from "../script/generateData"
function createBigData(size: number) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push({ id: i, name: `name_${i}`, info: { value: i % 2 === 0 ? "" : i } });
  }
  return arr;
}
const bigData = createBigData(10_000_000);

console.time("isEmpty - 1000w");
isEmpty(bigData, { returnKeys: false });
console.timeEnd("isEmpty - 1000w");


function chunkProcess<T>(data: T[], chunkSize: number, callback: (chunk: T[]) => void, done: () => void) {
  let index = 0;
  function next() {
    const slice = data.slice(index, index + chunkSize);
    if (slice.length > 0) {
      callback(slice);
      index += chunkSize;
      setTimeout(next); // 把任务分片，避免长时间阻塞
    } else {
      done();
    }
  }
  next();
}

// 用法
// const bigData2 = createBigData(100_000_000);
// console.time("chunk isEmpty");

// chunkProcess(bigData2, 100000, (chunk) => {
//   isEmpty(chunk, { returnKeys: false });
// }, () => {
//   console.timeEnd("chunk isEmpty");
// });


</script>

<template>
  <!-- <input type="file" @change="getBase64">
  <img style="width:100px;height:100px;" src="https://i-blog.csdnimg.cn/direct/fb06cd5757374e54b35533cae5f7bfe8.png" alt="">
  <img style="width:100px;height:100px;" :src="base64" alt="">
  <iframe style="width:500px;height:800px;" :src="base64" frameborder="0"></iframe> -->
</template>