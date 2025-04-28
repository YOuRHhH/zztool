<script setup lang="ts">
// import * as tool from "../lib/index.js";
import { dataEmpty } from "../lib/index.js";


const obj2: any = {a:1};
obj2.self = obj2;

console.log(dataEmpty(obj2)); // true （全部为空）
// 期望 ['list.0', 'list.1']，但是你的目前也可以，但逻辑稍显混乱。


</script>

<template>
  <div></div>
</template>