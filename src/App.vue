<script setup lang="js">
import {generateLargeComplexObject} from '../script/generateData.js';
import _ from 'lodash';
import { stripEmpty } from '../lib';
const data = generateLargeComplexObject();
// 调用示例

console.log('--- 1. 基本对象 ---');
console.log(
  stripEmpty({ a:1, b:'', c:null, d:0 })
);
// 期望: { a:1, d:0 } （空字符串和 null 被移除，0保留）

console.log('--- 2. 多层嵌套对象 ---');
console.log(
  stripEmpty({ a:{ b:'', c:2, d:{ e:'', f:3 } }, g:'' })
);
// 期望: { a:{ c:2, d:{ f:3 } } }

console.log('--- 3. 数组内空值 ---');
console.log(
  stripEmpty({ a:[1,'',null,3], b:2 })
);
// 期望: { a:[1,3], b:2 }

console.log('--- 4. 空数组 ---');
console.log(
  stripEmpty({ a:[], b:{ c:[] } })
);
// 期望: {} （空数组被移除，嵌套空数组也被移除）

console.log('--- 5. filterArray = false ---');
console.log(
  stripEmpty({ a:['',null,1], b:2 }, { filterArray:false })
);
// 期望: { a:['',null,1], b:2 } （数组内空值不被过滤，但对象属性依然过滤）

console.log('--- 6. 自定义 checkEmptyFn ---');
console.log(
  stripEmpty({ a:0, b:'', c:null }, { checkEmptyFn:(v)=>v==null })
);
// 期望: { a:0, b:'' } （只过滤 null 或 undefined，自定义逻辑生效）

console.log('--- 7. 对象为空或非对象 ---');
console.log(stripEmpty(null)); // 期望: null
console.log(stripEmpty(undefined)); // 期望: undefined
console.log(stripEmpty(123)); // 期望: 123
console.log(stripEmpty('abc')); // 期望: 'abc'

console.log('--- 8. 深层数组嵌套对象 ---');
console.log(
  stripEmpty({ a:[{ b:'', c:2 }, { d:null, e:3 }] })
);
// 期望: { a:[{ c:2 }, { e:3 }] }

console.log('--- 9. 保留 falsy 值 ---');
console.log(
  stripEmpty({ a:0, b:false, c:'', d:null })
);
// 期望: { a:0, b:false } （0 和 false 不算空值，'' 和 null 被移除）
</script>

<template>
  <div>
  </div>
</template>