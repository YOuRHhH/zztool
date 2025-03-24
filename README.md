# @zzcpt/zztool js 工具库

`@zzcpt/zztool` 是一个轻量级，使用ECMAScript 2015，高性能的前端工具库，支持 Tree Shaking，旨在简化日常开发中的常见操作，提高开发效率。它提供了多种实用的工具函数，包括数据处理、数据校验、格式转换等。

[中文](https://github.com/YOuRHhH/zztool/blob/main/README.md) | [English](https://github.com/YOuRHhH/zztool/blob/main/READMEEN.md)

## ✨ 特征

- 🚀 轻量且可摇树
- 🔧 数组、字符串、日期、对象等实用工具
- 💡 以 TypeScript 编写，支持完整类型
- 🌐 支持 CDN 或 NPM

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

[MIT](https://github.com/YOuRHhH/zztool/blob/main/LICENSE)     [文档地址](https://yourhhh.github.io/zztoolDocument/)

## 贡献

欢迎贡献代码或提交 Issue！

GitHub 仓库地址：[https://github.com/YOuRHhH/zztool](https://github.com/YOuRHhH/zztool)

## 许可证

`@zzcpt/zztool` 遵循 MIT 许可证。

## 更新日志

请看 [CHANGELOG.md](https://github.com/YOuRHhH/zztool/blob/main/CHANGELOG.md) 文件
