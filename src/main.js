// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$qs = qs
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//Vue.prototype.$Url = "http://39.105.24.238" 
Vue.prototype.$Url = '/api'
//全局header设置TOKEN
router.beforeEach((to, from, next) => {
  if (localStorage["ACCESS_TOKEN"] != null || localStorage["ACCESS_TOKEN"] != '' || !localStorage["ACCESS_TOKEN"] || localStorage["ACCESS_TOKEN"] != undefined) {
    axios.defaults.headers.common["ACCESS_TOKEN"] = localStorage["ACCESS_TOKEN"]
  }
  next()
});
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})