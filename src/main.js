// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//关闭生产模式下给出的提示
Vue.config.productionTip = false

//全局使用ElementUI
Vue.use(ElementUI)

/* eslint-disable no-new */
//vue程序入口
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
