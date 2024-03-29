import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

/* Layout */
import Layout from 'epl/pages/layout/Layout'

/* Router Modules */

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: '',
    meta: { title: '开发指南' },
    children: [
      {
        path: '/about',
        name: 'about',
        meta: { title: '关于' },
        component: () => import('epl/docs/about.md')
      },
      {
        path: '/quikeStart',
        name: 'quikeStart',
        meta: { title: '快速开始' },
        component: () => import('epl/docs/quikeStart.md')
      }
    ]
  },

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
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = []
