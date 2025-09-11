<script setup lang="ts">
import { stripEmpty } from "../lib/index.js";

const obj = { a: 1, b: 2, c: 3,d:{a:[null,{},[],0,false,'',,{abc:123}],b:1} };
console.log(stripEmpty(obj))
</script>

<template>
  <div style="height: 200px;width:200px;background: black;">
  </div>
</template>