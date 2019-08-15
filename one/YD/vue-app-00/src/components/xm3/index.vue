<template>
    <div class="yh_container">
        <div class="page-wrap">
            <!-- 1.顶部标题栏 -->
            <titlebar leftTitle="优化" :rightFirstImg="require('../../ico/search.png')" :rightSecondImg="require('../../ico/add.png')" :search="mysearch" :add3="myadd3"></titlebar>
            <!-- 2.防止顶部内溢出，保留(标题)48px -->
            <div style="margin-top:48px"></div>
            <!-- 3.面板   1父面板  4子面板 -->
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="message">
                    <navLi></navLi>
                    <messagelist></messagelist>
                    <indexzhu></indexzhu>
                </mt-tab-container-item>
            </mt-tab-container>
            <!-- 4.底部导航条 -->
            <mt-tabbar v-model="active" fixed>
                <mt-tab-item id="message" @click.native="changeState(0)">
                    <tabbaricon :selectedImage="require('../../assets/ic_weixin_selected.png')" :normalImage="require('../../assets/ic_weixin_normal.png')" :focused="currentIndex[0].isSelect"></tabbaricon>
                   首页
                </mt-tab-item>
                <mt-tab-item id="study" @click.native="changeState(1)">
                    <tabbaricon :selectedImage="require('../../assets/ic_contacts_selected.png')" :normalImage="require('../../assets/ic_contacts_normal.png')" :focused="currentIndex[1].isSelect"></tabbaricon>
                    资料
                </mt-tab-item>
                <mt-tab-item id="find" @click.native="changeState(2)">
                    <tabbaricon :selectedImage="require('../../assets/ic_find_selected.png')" :normalImage="require('../../assets/ic_find_normal.png')" :focused="currentIndex[2].isSelect" ></tabbaricon>
                    搜索
                </mt-tab-item>
                <mt-tab-item id="me" @click.native="changeState(3)">
                    <tabbaricon :selectedImage="require('../../assets/ic_me_selected.png')" :normalImage="require('../../assets/ic_me_normal.png')" :focused="currentIndex[3].isSelect"></tabbaricon>
                    个人中心
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>

<script>
// 1.引入顶部导航条_子组件  
import TitleBar from "./common/TitleBar.vue"
import navLi from "./common/navLi.vue"

import messagelist from "./common/MessageList.vue"
import indexzhu from "./common/indexzhu.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
// 3.调用顶部导航条_子组件
export default {
    data(){
        return {
            // 子组件id
            active:"message",
            // 使用数据保存图片焦点状态
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false}
            ]
            // isSelected:true
        }
    },
    // 2.注册顶部导航条_子组件  ("titlebar"标签名)
    components:{
        "titlebar":TitleBar,
        "messagelist":messagelist,
        "indexzhu":indexzhu,
        "tabbaricon":TabBarIcon,
        "navLi":navLi
    },
    methods:{
        mysearch(){
            console.log("搜索")
        },
        myadd3(){
            console.log("添加")
        },
        changeState(n){
            // 1.n当前按钮下标
            // 2.创建循环数据
            for(var i=0;i<this.currentIndex.length;i++){
                // 3.如果当前下标与参数下标一致  true
                if(n==i){
                    this.currentIndex[i].isSelect=true;
                }else{ 
                    // 4.其它元素 false 
                    this.currentIndex[i].isSelect=false;
                }
        
            }
        }
    }
}
</script>

<style scoped>
/* 1.最外层父元素 */
.yh_container{
    overflow: hidden;
    
}
.page-wrap{
    overflow:auto;  /* 溢出显示滚动条 */
    padding-bottom: 60px;    /* 底部导航条的高度 */
}
/* 修改tabbar 默认文字颜色 */
.mint-tabbar{
    background:#eaeaea;
}
.mint-tabbar>.mint-tab-item {
    color: #595959;
}

/* 修改tabbar 选中文字颜色 */
.mint-tabbar>.mint-tab-item.is-selected {
    background: transparent;
    color: #45c018;
}
</style>
