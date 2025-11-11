<script setup lang="js">
import {generateLargeComplexObject} from '../script/generateData.js';
import _ from 'lodash';
import { getRecentDate } from '../lib';
console.log(getRecentDate({
  date: new Date(),
  step: 100,
  type:'after',
  option: { 1: 3, 2: 7, 3: 15, 4: 300 }
}))

</script>

<template>
  <div>
    <button @click="copyText">button</button>
  </div>
</template>

