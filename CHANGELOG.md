# CHANGE LOG

该`2.0.0`版本不操作任何DOM

## 2.0 [VERSION]

* 2.6.4
  
  * 优化
    * isEmpty
      * 优化代码
    * 
* 2.6.3
  
  * 重要
    
    * 公共逻辑 defaultCheckEmpty 增强
  * 导出
    
    * getOnceStorage
      * 忘记导出了
  * 优化
    
    * isEmpty
      * 优化代码，通过严格边缘性测试
    * stripEmpty
      * 存在循环依赖问题，优化代码，通过严格边缘性测试
    * equal
      * 通过严格边缘性测试
* 2.6.1-2.6.2
  
  * 测试 GitHub Pages Action 自动发布
  * 2.6.0、2.6.1、2.6.2版本代码一致
* ### 2.6.0
  
  * `版本介绍` 新增多个BOM工具函数
  * 优化
    
    * getRecentDate
      
      * 参数应该是一个`options`对象，但是未正常获取值，导致返回值异常
      * 增加`step`校验，`option`里没有`step`，默认`option`第一个
    * chunkArrayItem
      
      * 在2.5.4优化后忘记删除前置判断导致未生效
  * 新增
    
    * copy
    * cookie
      * `setCookie`,`getCookie`,'removeCookie'
    * onceStorage
      * `onceStorage`,`getOnceStorage`,`getAllOnceStorage`,`removeOnceStorage`,`removeAllOnceStorage`
    * isToday
    * isYesterday
* 2.5.4
  
  * 优化
    * deepRenameKey
      * 支持多个key重命名
  * 边缘测试/修复
    * chunkArrayItem
      * size = 0 不会报错则会，浅拷贝返回源数据
    * dataFind
      * value 可以是`undefined`,`null`
    * renameKeysByPath
      * 路径不存在时不再会报错
    * stripEmpty
      * ```javascript
        /*
         * 输出与预期不一样
         * 预期 {}
         * 实际 {b:{}}
        */
        const obj = {a:[],b:{c:[]}}
        stripEmpty(obj)
        ```
* 2.5.3
  
  * 2.5.2上传时忘记删除package.json里多余的东西, 净化package.json
* 2.5.2
  
  * 修复
    * 修复使用 `_now`的函数，因为无法获取最新时间
      * timeFromNow
      * timeAgo
      * throttle
* 2.5.1
  
  * `版本介绍`优化整体配置
  * 优化
    
    * 配置
      * 之前未完全开启严格模式，现已经开启
    * once
      * 严格模式下this报错
* ### 2.5.0
  
  * `版本介绍`优化百万/千万级别的性能
  * 优化
    
    * 内部判空函数 `defaultCheckEmpty`
    * pick
      * 百万级别数据会超出调用栈
      * 去除parentKey
    * isNode // lib/utils/public
      * process 无法识别问题
      * `解决方法` 找到这个文件加入 `declare var process: any` 之后版本不会再出现此问题
  * 新增
    
    * jsonParse json解析
    * jsonStringify json字符串化
    * pipe 管道函数
    * once 只执行一次
* 2.4.2
  
  * 增加所有函数的测试用例
  * 修复
    * getBetweenDate 会多出来一天
    * moneyFormat 参数为空字符串返回不正确,因该为 `"0"`
  * 删除
    * toTree 移出配置项用不到
* 2.4.1
  
  * 优化
    
    * 优化部分代码为了减小代码体积
    * 统一判空处理函数 请在 `public`文件中查看 `defaultCheckEmpty`
      * arrayTrim
      * isEmpty
      * stripEmpty
  * 修复
    
    * timeAgo 参数提示错误
    * stripEmpty 处理数组对象异常
    * isEmpty 字符串也会循环导致 `Maximum call stack size exceeded`报错
  * 新增
    
    * timeFromNow 距离未来还有多久
    * fileTobase64 文件转base64格式
* ### 2.4.0
  
  * `版本介绍`: 函数名称改为通俗易懂简易方便开发者使用，此后更新版本，函数名称将不会变更。
  * 新增
    
    * omit 删除对象中的属性
    * timeAgo 多久之前
    * clamp 截取数字
  * 优化
    
    * groupBy
      * 改成通用逻辑
  * 改名
    
    * getSameIndexValue -> pick
    * dataAllEmpty -> isEmpty
    * dataChangeAllIndex -> deepRenameKey
    * dataChangeIndex -> renameKeysByPath
    * dataEqual -> equal
* 2.3.5
  
  * 修正方法注解
    * stripEmpty
    * arrayTrim
* 2.3.4
  
  * 修改package.json `type="module"` 因为在TS项目中无法打包
* 2.3.2
  
  * 优化
    * arrayTrim
      * `'',null,undefined,{},[], ,` 都视为空值
    * striptEmpty
      * 增加option配置项
      * 增加数组判断
* ### 2.3.0
  
  * 优化
    * 函数重载
      * dataEqual
      * dataAllEmpty
      * paramformat
    * TS提示类型
      * dataChangeAllIndex
      * dataChangeIndex
      * dataFind
      * deepClone
      * getBetweenDate
      * getChar
      * getDate
      * getRandomColor
      * getRandomRGBA
      * getRandomRGBColor
      * getRecentDate
      * getTimeStamp
      * getTimeStep
      * getUrlParam
      * groupBy
      * moneyFormat
      * paramformat
      * sleep
      * storage(getStorage,setStorage,removeStorage)
    * 逻辑
      * getLastChar
      * getUrlParam
  * 修复
    * dataAllEmpty
      * 返回值错误
  * 弃用（将在 3.0 版本 删除）
    * dataEmpty
      * 此方法与 dataAllEmptygetValue 功能雷同，请使用 dataAllEmpty
    * getSameIndexValue
      * 此方法与 getValue 功能雷同，请使用 getValue
  * 新增
    * stripEmpty
      * 移出对象中的空属性
* 2.0.78
  
  * 优化
    * setStorage
    * getStorage
    * removeStorage
    * 注: 支持无线嵌套
* 2.0.77
  
  * 增加
    * setStorage
    * getStorage
    * removeStorage
    * 注: 这三个方法仅支持两层
* 2.0.76
  
  * 优化
    * getDateInfo
      * 删除对ios的优化,恢复之前的判断
* 2.0.75
  
  * 优化
    * getDateInfo
      * 去除判断,对(2025-06-17T06:59:32.000Z)此格式会判断有误
    * package.json
      * type 值更改为 commonjs
* 2.0.74
  
  * 增加
    
    * 测试用例
      * 增加基本的测试用例，没增加的测试用例 1. 我不会搞 2. 后续慢慢写全
    * strReplace
      * 字符串替换
    * dataAllEmpty
      * 数据是否全部为空
  * 优化
    
    * chunkArray
      
      * 数据为空时提示错误，不提示
      * 不为数组时报错
      * size参数大于data数据的长度是报错的，修改为继续执行，代码为
        * `chunkArray([1,2,3],4) = [[1],[2],[3],[]]`
    * dataFind
      
      * 修改代码注释
      * 增加前置判断
        * `value === "null"`
    * dataEmpty
      
      * 增加循环引用时判断写错，`[],{}`被判断不为空
    * groupBy
      
      * 修改整体逻辑，修改返回值
    * dataEmpty
      
      * 防止循环引用
* 2.0.73
  
  * 优化
    * toTree
      * 增加配置项 {}
        * children 子级字段命名
        * pidVal 父级字段值
    * dataFind
      * 优化参数校验，当value为0时会误判
      * 优化递归逻辑，区分数据类型增加前置判断避免误判
    * regIsHas
      * 修改验证逻辑，使用正则
    * toArray
      * 简化整体逻辑，可处理，数组、对象、字符串、JSON字符串
      * 注意：没有递归逻辑
* 2.0.72
  
  * 优化
    * dataEmpty
      * 空数组/空对象返回为true
* 2.0.71
  
  * 优化
    * paramformat
      * 去除node环境下引入"form-data"包
* 2.0.7
  
  * 优化
    * 优化所有工具函数在node环境下运行的问题
    * 增加部分工具函数测试单元
    * 部分返回值修改
      
      * getBetweenDate
        * 前后日期一致将返回一致日期
      * getRecentDate
        * 不包含输入的日期
      * getTimeStamp
        * 为NaN返回NaN
    * moneyFormat
      
      * 增加了前置判断
    * dataChangeIndex
      
      * 修复“arr[0].xxx”格式下异常
    * dataEqual
      
      * 修复递归返回值导致结果异常
    * deepClone
      
      * 支持更多类型
    * regEmail
      
      * 更接近 **RFC 5322** 标准的邮箱校验
* 2.0.6
  
  * 优化
    * 优化代码鲁棒性
    * getValue
      * 支持 'xxx[0].yyy'
* 2.0.5
  
  * 增加
    * 测试单元
  * 优化
    * dataEmpty
      
      * 值为NaN也会记录
* 2.0.4
  
  * 增加
    * 增加umd.js文件
    * CHANGELOG.md 更新日志文件
  * 优化
    * getRecentDate
      * 优化写法，修改部分数值
* 2.0.3
  
  * 修改dataFind未找到返回为null

