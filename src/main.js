import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 基础资源引入
import './assets/css/base.css'
import './assets/js/font.js'


import axios from 'axios'

Vue.prototype.$axios=axios;
// $不是juery,$代表的是全局
//prototype    原型对象
//__proto__    原型链

//vant-ui 引入
import 'vant/lib/index.css';
import Vant from 'vant';
//  .use  添加中间键
Vue.use(Vant);


// vant-ui 按需引入
// import { Button,Cell, CellGroup,Icon  } from 'vant';
// Vue.use(Button).use(Cell).use(CellGroup).use(Icon);






Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
