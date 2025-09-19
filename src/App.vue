<script setup lang="ts">

// import { ref } from 'vue'
import { isEmpty, equal, stripEmpty, arrayTrim } from "../lib"
// 引入图片
// const base64 = ref('');
// https://oss.ttz111.com/newrisk_online/fDrwU7bVRQVz84Mf4ybuknNZMLVN1kfvTXIU8iAj.jpg

  const obj = {
    a: 1,
    b: "",
    c: null,
    d: [],
    e: {},
    f: 0,
    g: false,
    z: {
      a: 1,
      b: "",
      xx: {},
      zz: [],
      yy: {
        name: "",
        age: 25,
        hobby: ['123','test','',undefined,null,0,false],
      },
    },
  };
  const obj1 = {
    a: 1,
    b: "",
    c: null,
    d: [],
    e: {},
    f: 0,
    g: false,
    z: {
      a: 1,
      b: "",
      xx: {},
      zz: [],
      yy: {
        name: "",
        age: 251,
        hobby: ['123','1','test','',undefined,null,0,false],
      },
    },
  };
const data = equal(obj,obj1,{returnKeys:true})
console.log(data)
// const time = timeAgo(1758013775599,{
//   open:true,
//   cb:({}) => {
//     const str = `${minutes}分钟前`
//     return str
//   }
// });
// console.log(time)
// const result = omitDeep(data, ["user.profile.age", "meta.timestamp",'test']);

// console.log(result);
// console.log(arrayTrim([null,{},[],0,false,'',,{abc:123}]))
</script>

<template>
  <!-- <input type="file" @change="getBase64">
  <img style="width:100px;height:100px;" src="https://i-blog.csdnimg.cn/direct/fb06cd5757374e54b35533cae5f7bfe8.png" alt="">
  <img style="width:100px;height:100px;" :src="base64" alt="">
  <iframe style="width:500px;height:800px;" :src="base64" frameborder="0"></iframe> -->
</template>