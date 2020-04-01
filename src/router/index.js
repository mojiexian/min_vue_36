import Vue from 'vue'
import VueRouter from 'vue-router'
// 1.引入组件
// 登录页
import Login from '@/views/login.vue'
// 首页
import Home from '@/views/home.vue'
// 3.让 vue 使用 vue-router 进行路由管理
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
// 导出
export default router
