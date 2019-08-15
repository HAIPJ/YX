//router.js  引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件


//1.引入Exam01.vue组件

import index from "./components/xm3/index.vue"
import MessageList from "./components/xm3/common/MessageList.vue"
import indexzhu from "./components/xm3/common/indexzhu.vue"
import navLi from "./components/xm3/common/navLi.vue"

Vue.use(Router)  

//2.为Exam01.vue配置路径
export default new Router({
  routes: [
    {path:'/index',component:index},
    {path:'/MessageList',component:MessageList},
    {path:'/indexzhu',component:indexzhu},
    {path:'/navLi',component:navLi}

  ]
})
