// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueQuillEditor)

Vue.prototype.$qs = qs
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$Url = "http://39.105.24.238" 
//Vue.prototype.$Url = '/api'
//全局header设置TOKEN
//图片懒加载
Vue.use(VueLazyLoad, {
    error:'http://jkytest.oss-cn-beijing.aliyuncs.com/staticimg/break_img.png',
    loading:'http://jkytest.oss-cn-beijing.aliyuncs.com/staticimg/loading_circle.png',
    attempt: 1,
    throttleWait: 500
})
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
