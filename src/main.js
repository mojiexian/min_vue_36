import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from '@/router/index.js'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入公共样式
import '@/styles/index.less'
// 让vue使用element-ui
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  // 注入
  router,
  render: h => h(App)
}).$mount('#app')
