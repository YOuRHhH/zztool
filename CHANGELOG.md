# CHANGE LOG

## [VERSION]

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
        >
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
        >
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
