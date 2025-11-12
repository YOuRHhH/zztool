<script setup lang="js">
import { getRecentDate,getStorage } from '../lib';

console.log(getStorage('test'))

</script>

<template>
  <div>
    <button @click="copyText">button</button>
  </div>
</template>

