<script setup lang="js">
import {generateLargeComplexObject} from '../script/generateData.js';
import _ from 'lodash';
import { dataFind } from '../lib';
const data = generateLargeComplexObject();
const arr = [1,2,3,4,5,6,7,8,9,10];
const newArr = dataFind({ a: 1, b: { c: null , d: 3} }, 'c', null); // { c: 2, d: 3 }
console.log(newArr);
</script>

<template>
  <div>
  </div>
</template>