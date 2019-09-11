## 快速上手

本节将介绍如何在项目中添加组件文档和如何运行项目。

### 运行项目

先安装依赖

`npm install --registry=http://registry.npm.taobao.org`

运行项目

`npm run demo`

打包编译项目

`npm run build:demo`

### 新增帮助文档

帮助文档路径在/examples/docs下面，帮助文档是通过markdown编写的，如果不熟悉markdown的语法可以看[这篇](https://www.jianshu.com/p/335db5716248)文章

编写完帮助文档之后，在/examples/router/index.js下面配置新的帮助文档路由即可

### 新增组件帮助文档

自定义vue组件路径在/src/components下

下面以HelloWorld组件为例

编写好自定义组件后，需要在/src/index.js文件下导出自定义组件

```
import HelloWorld from './components/HelloWorld'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

function install(Vue) {
  Vue.component(HelloWorld.name, HelloWorld)
}

export default {
  install,
  HelloWorld
}
```

然后在/examples/docs路径下新建helloWorld.md文件

```
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
\（这里反斜杠是为了不让```生效，实际使用需要去掉）```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| msg     | 展示文字   | string  |   —            |    hello     |

```

编写好md文件之后，需要在路由/examples/router/index.js配置helloWorld路径指向该帮助文档即可

```
  {
    path: '/components',
    component: Layout,
    redirect: '',
    alwaysShow: true,
    meta: { title: '组件' },
    children: [
      {
        path: '/helloWorld',
        name: 'helloWorld',
        meta: { title: 'helloWorld' },
        component: () => import('epl/docs/helloWorld.md')
      }
    ]
  }
```
