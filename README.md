# @zzcpt/zztool js 工具库

`@zzcpt/zztool` 是一个轻量级，使用ECMAScript 2015，高性能的前端工具库，支持 Tree Shaking，旨在简化日常开发中的常见操作，提高开发效率。它提供了多种实用的工具函数，包括数据处理、数据校验、格式转换等。

[![npm version](https://img.shields.io/npm/v/@zzcpt/zztool?label=version)](https://www.npmjs.com/package/@zzcpt/zztool)
[![npm downloads](https://img.shields.io/npm/dm/@zzcpt/zztool?label=downloads)](https://www.npmjs.com/package/@zzcpt/zztool)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/@zzcpt/zztool/badge)](https://www.jsdelivr.com/package/npm/@zzcpt/zztool)
[![License](https://img.shields.io/github/license/YOuRHhH/zztool)](./LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@zzcpt/zztool?label=size)](https://bundlephobia.com/package/@zzcpt/zztool)

[中文](https://github.com/YOuRHhH/zztool/blob/main/README.md) | [English](https://github.com/YOuRHhH/zztool/blob/main/READMEEN.md)

## ✨ 特征

* 🚀 ​**轻量且可摇树**​：零依赖，支持按需引入，体积小巧
* 🔧 ​**常用工具函数**​：数组、字符串、日期、对象、函数控制、存储等全覆盖
* 💡 ​**TypeScript 编写**​：完整类型提示，参数校验与错误提示更安全
* 🌐 ​**多环境支持**​：兼容 Node.js、浏览器，支持通过 **CDN / NPM** 引入
* 🧩 ​**高内聚低耦合**​：函数职责单一，组合灵活，便于扩展
* ⚡ ​**高性能实现**​：避免冗余逻辑，递归/循环清晰，运行高效

## 📦 安装

```bash
# via npm
npm install @zzcpt/zztool

# or via yarn
yarn add @zzcpt/zztool

# or via CDN
<script src="https://cdn.jsdelivr.net/npm/@zzcpt/zztool"></script>
```

## 🚀 使用

```ts
import { isEmpty, getDate} from '@zzcpt/zztool';

console.log(isEmpty([])); // true
console.log(getDate('Y-M-D')) // xxxx-xx-xx
console.log(getDate(new Date(), 'Y-M-D')); // xxxx-xx-xx
```

Node.js CommonJS

```js
const { isEmpty } = require('@zzcpt/zztool');
console.log(isEmpty([])); // true
```

## 🌍 CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@zzcpt/zztool"></script>
<script>
  console.log(zztool.isEmpty([])); // true
</script>
```

## 🔔提醒

本库不支持IE，如果需要支持IE请在自己项目中使用 `Babel 转译`或 `Polyfill `或其他的工具

## 📚文档

[文档地址](https://yourhhh.github.io/zztoolDocument/)

## 🏆贡献

欢迎贡献代码或提交 Issue！

GitHub 仓库地址：[https://github.com/YOuRHhH/zztool](https://github.com/YOuRHhH/zztool)

## 📕许可证

`@zzcpt/zztool` 遵循 MIT 许可证。
[MIT](https://github.com/YOuRHhH/zztool/blob/main/LICENSE)

## 更新日志

请看 [CHANGELOG.md](https://github.com/YOuRHhH/zztool/blob/main/CHANGELOG.md) 文件

## 更新

更新版本遵循`语义化版本(SemVer)`从2.4.0开始





