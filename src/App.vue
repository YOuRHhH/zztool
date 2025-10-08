<script setup lang="js">
import { getDate,getDateType } from '../lib';
console.log(getDate(new Date(), "Y/M/D h:m:s"));
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