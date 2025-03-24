<script setup lang="ts">
// import { onMounted, ref } from 'vue';
import * as tool from "../lib/index.js";
// import HelloWorld from "./components/HelloWorld.vue";

// const arr = tool.dataEqual(obj1, obj2, { returnKeys: true})

// console.log(tool.getTimeStep('08:00', '24:00','00:15','ss:hh:mm'));
// const obj1 = { key1: 'value1', key2: 'value2', nested: { key3: 'value3' } };
const obj = {
    name: "zztool",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
        name: "zztool",
        age: 18,
        sex: 1,
        address: "中国",
        hobby: ["打游戏", "看电影"],
        info: null,
    },
    arr: [
        {
        name: "zztool",
        },
        {
        name: "list",
        },
        1,2,3
    ]
  }
  const data = tool.dataChangeIndex(obj, "arr[0].name", "arr[0].测试");
  console.log(data);
</script>

<template>
  <div>
  </div>
</template>