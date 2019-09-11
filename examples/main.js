import 'highlight.js/styles/color-brewer.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'epl/styles/index.scss' // global css

import Vue from 'vue'
import Element from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import './icons' // icon

import DemoBlock from 'epl/components/Demo/demo-block'
Vue.component('demo-block', DemoBlock)

// 引入组件
import MyComponents from '../src'
Vue.use(MyComponents)

// import * as filters from './filters' // global filters
// // register global utility filters.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

Vue.use(Element)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({ path: '/about' })
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
