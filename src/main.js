// 入口文件
import Vue from 'vue'
// 根组件
import App from './App.vue'
// 路由
import router from './router'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
