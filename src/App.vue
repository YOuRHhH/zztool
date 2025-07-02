<script setup lang="ts">
// import * as tool from "../lib/index.js";
import { setStorage,getStorage,removeStorage } from "../lib/index.js";


const obj = { a: { b: { c: 1 } } }
setStorage('obj',obj);
setStorage('obj.obj',obj)
console.log('obj:',getStorage('obj'))
console.log('obj.obj:',getStorage('obj.obj'))
setTimeout(() => {
  removeStorage('obj')
}, 2000);
</script>

<template>
  <div></div>
</template>