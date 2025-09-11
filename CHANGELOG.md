# CHANGE LOG

## 2.0 [VERSION]

* 2.3.4
  * 修改package.json `type`

* 2.3.2
  
  * 优化
    * arrayTrim
      * `'',null,undefined,{},[], ,` 都视为空值
    * striptEmpty
      * 增加option配置项
      * 增加数组判断
* 2.3.0
  
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

## 1.0 [VERSION]

* 1.3.1
  
  * 支持 Tree Shaking
* 1.2.8
  
  * 优化
    * 修复错误 getRecentDate
    * 优化写法 strReplace
* 1.2.7
  
  * 增加
    * getSameIndexValue
    * getValue
  * 优化
    * getTimeStep
      
      * 优化写法
    * dataEqual
      
      * > 参数问题
        > options.arrayDiff为true时则会对比相同索引的
        > 
        > 浅对比
        > 
        > 在 **浅对比** 模式下，数组的顺序不影响比较结果
        > 
        > **深对比**
        > 
        > 在 **深对比** 模式下，数组的顺序会影响比较结果
        > 因为参数options.arrayDiff为false时数组浅对比有问题，数据是数据对象并且顺序不一致时难以记录key，在此删除该参数强制开启深对比
* 1.2.4
  
  * 增加
    * dataChangeIndex
    * sleep
    * chunkArray
    * chunkArrayItem
  * 优化
    * toTree
      * 一个判断出现了失误，更新1.2.1版本为了偷懒使用AI帮助减少体力劳动，更新时本人未检查到位。
    * 优化写法 getSameIndexValue
* 1.2.1
  
  * 增加
    * getTimeStamp
  * 删除
    * dataFindValues（没实际作用，请使用dataFind）
  * 其他
    * 调整导出规则可按需导入
    * 删除isNumber,isNaN等方法
* 1.1.5
  
  * 增加
    * getRandomString
  * 优化
    * getTimeStep
      * 支持"hh:mm:ss，hh:mm"格式
    * dataEqual
      * > 发现的问题：1. 同值不同索引会被记录为不同数组。2. 对象值相同地址不同会被记录。
        > 解决方法：1. every和includes优化数组对比并增加参数应对不同环境。2. 修改整体逻辑判断
* 1.1.4
  
  * 增加
    * calculatePercentage
    * shuffleArray
  * 优化
    * getUrlParam
    * getDate
    * getBetweenDate
* 1.1.3
  
  * 优化
    * dataEmpty
    * dataEqual
* 1.1.2
  
  * 增加 [文档](https://yourhhh.github.io/zztoolDocument/ "点击打开")
  * 修复
    * getDateList
* 1.1.1
  
  * 增加
    * getBetweenDate
    * getDateList
    * getTimeStep
* 1.1.0
  
  * 优化
    * regIdcard
* 1.0.8
  
  * 增加
    * getWeekDay
    * getMonthDays
    * weekInMonthCount
    * getYearWeeks
  * 优化
    * getDate
    * getDateType
* 1.0.7
  
  * 增加
    * getUrlParam
    * paramFormat
    * getWeekTime
  * 优化
    * toBoolean
    * toArray
    * getDateType

