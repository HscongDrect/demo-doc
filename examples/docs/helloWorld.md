## helloWorld

例子组件

## 基础用法

<!--
注意：具有交互功能的说明文档，需要有<script></script>标签，在标签元素中定义需要导出的vue实例。
在:::demo ::: 代码块中定义的模版<template></template>会作为导出的vue实例的模版，但是在代码块中的<script></script>中的内容仅作为展示，需注意。
-->
<script>
export default {
  data () {
    return {
      msg: '你好，世界！'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.hello-world {
  font-size: 33px;
}
</style>

:::demo 设置msg属性即可改变显示文字
``` html
<template>
  <hello-world :msg="msg" class="hello-world"></hello-world>
</template>
<script>
export default {
  data () {
    return {
      msg: '你好，世界！'
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.hello-world {
  font-size: 33px;
}
</style>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| msg     | 展示文字   | string  |   —            |    hello     |
