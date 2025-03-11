<script setup lang="ts">
// import { onMounted, ref } from 'vue';
import * as tool from "../lib/index.js";
// import HelloWorld from "./components/HelloWorld.vue";

// const arr = tool.dataEqual(obj1, obj2, { returnKeys: true})

// console.log(tool.getTimeStep('08:00', '24:00','00:15','ss:hh:mm'));
const obj1 = { a: 1, b: 0, c: { d: 3,a:'1', e: [1,2,3] } };
console.log(tool.paramformat(obj1,'url'))

</script>

<template>
  <div>
  </div>
</template>