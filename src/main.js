import Vue from 'vue'
import App from './App.vue'

//引入公共资源
import "./assets/css/style.css"

//引入路由
import Vuerouter from "vue-router"
Vue.use(Vuerouter);

//引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css');
Vue.use(VueAwesomeSwiper);

//引入状态管理
import store from "./store/"

//axios
import axios from "axios";
Vue.prototype.$http=axios;

//统一携带凭证
axios.defaults.withCredentials=true;

//拦截器
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  store.dispatch("showloading");
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  store.dispatch("hideloading");
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});



//自定义loading插件
import loading from "./components/loading/"
Vue.use(loading);

//引入动画
import "animate.css"

//引入路由
import routes from "./router.config"
var router =new Vuerouter({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
});

//自定义指令
Vue.directive("toTop",function(el,binding){
  var timer = null;
  var isTop = true;
  window.onscroll = function() {
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (osTop >= binding.value) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
    if (!isTop) {
      clearInterval(timer);
    }
    isTop = false;

  };
  el.onmouseup = function() {
    timer = setInterval(function(){
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      var ispeed = Math.floor(-osTop / 7);
      document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
      if (osTop == 0) {
        clearInterval(timer);
      };
      isTop = true;
    },30);
  };
});

//引入过滤器
import filters from "./filter/"
Object.keys(filters).forEach((key)=>{
  Vue.filter(key,filters[key])
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
