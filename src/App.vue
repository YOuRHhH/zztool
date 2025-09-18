<script setup lang="ts">

// mergeDeep(obj1, obj2) → 深度合并对象
// 2. 字符串 / 编码
// camelCase(str) → 转驼峰
// kebabCase(str) → 转 kebab-case
// uuid() → 生成唯一 ID
// base64Encode(str) / base64Decode(str)

// 4. DOM / 浏览器
// copyToClipboard(text) → 复制文本到剪贴板
// downloadFile(url, filename) → 下载文件
// scrollToTop() → 回到页面顶部
// fullscreenDrag(dom) → DOM 全屏拖拽


import { getRecentDate } from '../lib';
console.log(Date.now())
console.log(getRecentDate({
  date: new Date(),
  step:10
}));
// const time = timeAgo(1758013775599,{
//   open:true,
//   cb:({}) => {
//     const str = `${minutes}分钟前`
//     return str
//   }
// });
// console.log(time)
// const result = omitDeep(data, ["user.profile.age", "meta.timestamp",'test']);

// console.log(result);
// console.log(arrayTrim([null,{},[],0,false,'',,{abc:123}]))
</script>

<template>
  <div style="height: 200px;width:200px;background: black;">
  </div>
</template>