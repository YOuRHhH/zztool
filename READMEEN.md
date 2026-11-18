# @zzcpt/zztool js tool library

`@zzcpt/zztool` is a lightweight, high-performance front-end tool library that uses ECMAScript 2015 and supports Tree Shaking. It aims to simplify common operations in daily development and improve development efficiency. It provides a variety of practical tool functions, including data processing, data verification, format conversion, etc.

[![npm version](https://img.shields.io/npm/v/@zzcpt/zztool?label=version)](https://www.npmjs.com/package/@zzcpt/zztool)
[![npm downloads](https://img.shields.io/npm/dm/@zzcpt/zztool?label=downloads)](https://www.npmjs.com/package/@zzcpt/zztool)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/@zzcpt/zztool/badge)](https://www.jsdelivr.com/package/npm/@zzcpt/zztool)
[![License](https://img.shields.io/github/license/YOuRHhH/zztool)](./LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@zzcpt/zztool?label=size)](https://bundlephobia.com/package/@zzcpt/zztool)

[中文](https://github.com/YOuRHhH/zztool/blob/main/README.md) | [English](https://github.com/YOuRHhH/zztool/blob/main/READMEEN.md)

## ✨ Features

* 🚀 ​**Lightweight & Tree-shakable**​: Zero dependencies, supports on-demand imports, and small bundle size
* 🔧 ​**Utility Functions**​: Covers arrays, strings, dates, objects, function control, storage, and more
* 💡 ​**Written in TypeScript**​: Full type definitions, safer with parameter validation and error hints
* 🌐 ​**Multi-environment Support**​: Compatible with Node.js and browsers, available via **CDN / NPM**
* 🧩 ​**High Cohesion & Low Coupling**​: Each function has a single responsibility, easy to compose and extend
* ⚡ ​**High-performance Implementation**​: Avoids redundant logic, clear recursion/loops, efficient runtime

## 📦 Installation

```bash
# via npm
npm install @zzcpt/zztool

# or via yarn
yarn add @zzcpt/zztool

# or via CDN
<script src="https://cdn.jsdelivr.net/npm/@zzcpt/zztool"></script>
```

## 🚀 Usage

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

## 🔔Alert

This library does not support IE. If you need to support IE, please use `Babel translation` or `Polyfill` or other tools in your project.

## 📚Document

[Document](https://yourhhh.github.io/zztoolDocument/)

## 🏆Contribute

Welcome to contribute code or submit issues!

GitHub repository address：[https://github.com/YOuRHhH/zztool](https://github.com/YOuRHhH/zztool)

## 📕License

`@zzcpt/zztool` is licensed under the MIT License.

[MIT](https://github.com/YOuRHhH/zztool/blob/main/LICENSE)

## Changelog

Please see the [CHANGELOG.md](https://github.com/YOuRHhH/zztool/blob/main/CHANGELOG.md) file

