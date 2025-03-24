# @zzcpt/zztool js tool library

`@zzcpt/zztool` is a lightweight, high-performance front-end tool library that uses ECMAScript 2015 and supports Tree Shaking. It aims to simplify common operations in daily development and improve development efficiency. It provides a variety of practical tool functions, including data processing, data verification, format conversion, etc.

[中文](https://github.com/YOuRHhH/zztool/blob/main/README.md) | [English](https://github.com/YOuRHhH/zztool/blob/main/READMEEN.md)

## ✨ Features

- 🚀 Lightweight & tree-shakable
- 🔧 Handy utilities for arrays, strings, dates, objects, etc
- 💡 Written in TypeScript with full types support
- 🌐 CDN or NPM ready

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

console.log(dataEmpty([])); // true
console.log(getDate(new Date(), 'Y-M-D')); // xxxx-xx-xx
```

## 🌍 CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@zzcpt/zztool"></script>
<script>
  console.log(zztool.dataEmpty([])); // true
</script>
```

[MIT](https://github.com/YOuRHhH/zztool/blob/main/LICENSE)     [Document](https://yourhhh.github.io/zztoolDocument/)

## Contribute

Welcome to contribute code or submit issues!

GitHub repository address：[https://github.com/YOuRHhH/zztool](https://github.com/YOuRHhH/zztool)

## License

`@zzcpt/zztool` is licensed under the MIT License.

## Changelog

Please see the [CHANGELOG.md](https://github.com/YOuRHhH/zztool/blob/main/CHANGELOG.md) file
