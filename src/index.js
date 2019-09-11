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
