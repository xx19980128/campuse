// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import axios from 'axios';
import Qs from 'qs';
import App from './App';
import router from './router';
axios.defaults.withCredentials=true;
Vue.prototype.$interface = 'http://10.2.130.95:8080/CampusInformationPlatform/student/';
Vue.prototype.$interface_ = 'http://10.2.130.95:8080/CampusInformationPlatform/';
Vue.prototype.$http = axios;
Vue.prototype.$Qs = Qs;
Vue.use(ElementUI);
Vue.config.productionTip = false;
//Vuex配置

/*const store = new Vuex.Store({
  state: {
    domain:'http://10.2.130.95:8080', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
    userInfo: { //保存用户信息
      nick: null,
      ulevel: null,
      uid: null,
      portrait: null
    }
  },*/
/*  mutations: {
    //更新用户信息
    updateUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    }
  }
});*/

//设置cookie,增加到vue实例方便全局调用
Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + value +  ";expires=" + exdate.toGMTString();
};

//获取cookie、
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  console.log(reg);
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}


//删除cookie
Vue.prototype.delCookie = (name) => {
  alert(1);
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
