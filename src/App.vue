<script setup lang="js">
import {generateLargeComplexObject} from '../script/generateData.js';
import _ from 'lodash';
import { isEmpty,deepRenameKey } from '../lib';
const data = generateLargeComplexObject();
// 调用示例
console.time('deepRenameKey');
const is = deepRenameKey(data,'quantity,ags','xxxx,age');
console.timeEnd('deepRenameKey');
console.log(is);
</script>

<template>
  <div>
  </div>
</template>