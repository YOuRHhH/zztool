<script setup lang="js">
import { getType,getRecentDate,getStorage,isEmpty,arrayTrim } from '../lib';

const data = {
        a: 'value1',
        b: 'value2',
        c: {}
      };
      console.log(getType(new Date()))
console.log(isEmpty(data,{ ignoreKeys: ['a', 'b'] }))

</script>

<template>
  <div>
    <button @click="copyText">button</button>
  </div>
</template>

