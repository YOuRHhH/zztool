<script setup lang="js">
import {generateLargeComplexObject} from '../script/generateData.js';
import _ from 'lodash';
import { onceStorage,getAllOnceStorage,removeOnceStorage,removeAllOnceStorage,getStorage } from '../lib';
onceStorage('tempArr',[1,2,3])
onceStorage('tempArr1',{a:1,b:2})
setTimeout(() => {
  removeAllOnceStorage()
}, 2000);
</script>

<template>
  <div>
    <button @click="copyText">button</button>
  </div>
</template>

