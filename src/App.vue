<script setup lang="ts">
// import { onMounted, ref } from 'vue';
import * as tool from "../lib/index.js";
// import HelloWorld from "./components/HelloWorld.vue";

// const arr = tool.dataEqual(obj1, obj2, { returnKeys: true})

// console.log(tool.getTimeStep('08:00', '24:00','00:15','ss:hh:mm'));

const testFn = () => {
  tool.throttle(() => {
    console.log('throttle1');
  },500);
}
</script>

<template>
  <div>
    <button @click="testFn()">test</button>
  </div>
</template>