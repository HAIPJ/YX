import Vue from 'vue'
import App from './App.vue'
import router from './router' 

//第三方组件库在下面引入
//1:完整引入mint-ui
import MintUI from 'mint-ui' 
import {Swipe,SwipeItem}from "mint-ui"

// 引入视频组件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

//2:单引引入mint-ui样式
import 'mint-ui/lib/style.css'
// import axios from "./axios"
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

//3:将mint-ui注册vue
Vue.use(MintUI);
//4:引入图标字体样式文件
import "./font/iconfont.css"
//5:引入axios.js文件


// 6引入xuex
import Vuex from "vuex"
// 7注册VUEX组件
Vue.use(Vuex)
// 8创建store


// 9将store保存vue实例中

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
 // store 9将store保存vue实例中
}).$mount('#app')
