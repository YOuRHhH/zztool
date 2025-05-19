# CHANGE LOG

## 2.0 [VERSION]

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
