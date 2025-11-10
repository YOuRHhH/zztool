<script setup lang="js">
import {generateLargeComplexObject} from '../script/generateData.js';
import _ from 'lodash';
import { getStorage,getCookie, setCookie, removeCookie } from '../lib';

  setCookie('test',{name:'yi'},{
    expires: 60 * 1000,
  })
    console.log(getCookie('test'))

</script>

<template>
  <div>
    <button @click="copyText">button</button>
  </div>
</template>