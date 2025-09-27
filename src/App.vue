<script setup lang="ts">
import { pick } from '../lib';

const obj = {
  name: '张三',
  info:{
    age: 18,
    sex: '男',
    address: '北京',
    idcard: '110101199001011234'
  },
  idcard: '110101199001011234'
}
const result = pick(obj,'idcard');
console.log(result);

//     method: "POST",
//     body: JSON.stringify({
//       id: getRandomIdcard()
//     }),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   }).then(res => res.json()).then(res => {
//       console.log(res);
//     })
// });
</script>

<template>
  <!-- <input type="file" @change="getBase64">
  <img style="width:100px;height:100px;" src="https://i-blog.csdnimg.cn/direct/fb06cd5757374e54b35533cae5f7bfe8.png" alt="">
  <img style="width:100px;height:100px;" :src="base64" alt="">
  <iframe style="width:500px;height:800px;" :src="base64" frameborder="0"></iframe> -->
</template>