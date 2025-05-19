<script setup lang="ts">
// import * as tool from "../lib/index.js";
import { dataAllEmpty } from "../lib/index.js";


const obj = { a: { b: { c: 1 } } }
console.log(dataAllEmpty(obj, { returnKeys: true, maxDepth: 2 }))

</script>

<template>
  <div></div>
</template>