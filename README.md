# @zzcpt/zztool js 工具库

`@zzcpt/zztool` 是一个轻量级，使用ECMAScript 2015，高性能的前端工具库，支持 Tree Shaking，旨在简化日常开发中的常见操作，提高开发效率。它提供了多种实用的工具函数，包括数据处理、数据校验、格式转换等。

## 安装

通过 npm 安装：

```bash
npm install @zzcpt/zztool
```

通过 yarn 安装：

```bash
yarn add @zzcpt/zztool
```

通过 pnpm 安装：

```bash
pnpm add @zzcpt/zztool
```

## 快速开始

在项目中引入并使用：

```javascript
// 全部引入
import * as zztool from '@zzcpt/zztool';

// 按需引入
import { debounce, throttle } from '@zzcpt/zztool';

// 使用示例
const debouncedFn = () => { debounce(() => console.log('Debounced!'), 300); };
debouncedFn();
```

[MIT](https://github.com/YOuRHhH/zztool/blob/main/LICENSE)     [文档地址](https://yourhhh.github.io/zztoolDocument/)

## 贡献

欢迎贡献代码或提交 Issue！

GitHub 仓库地址：[https://github.com/YOuRHhH/zztool](https://github.com/YOuRHhH/zztool)

## 许可证

`@zzcpt/zztool` 遵循 MIT 许可证。

# 更新日志

请看 CHANGELOG.md 文件
