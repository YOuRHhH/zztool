<script setup lang="ts">
import { throttle } from "../lib/index.js";

// const obj = { a: 1, b: 2, c: 3,d:{} };
const data =   () => {
 throttle(() => {
     console.log("throttle");
  },1000)
}
console.log(data)
</script>

<template>
  <div style="height: 200px;width:200px;background: black;" @click="data">
  </div>
</template>