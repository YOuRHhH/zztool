<script setup lang="js">
import { 
  equal,
  stripEmpty,
  getType,
  getRecentDate,
  getStorage,
  isEmpty,
  arrayTrim 
} from '../lib';

const data = {a:1,b:[{c:1},{c:2}]}
const data1 = {a:1,b:[{c:1},{c:2}]}
console.log(equal(data,data1))

</script>

<template>
  <div>
    <button @click="copyText">button</button>
  </div>
</template>

