<template>
    <div class="itemstyle">
       <div  class="leftimgandtxt">
            <!-- change 每次滑动项目切换时触发事件，参数是输入项目的索引 -->
            <mt-swipe class="mt" @change="handleChange">
                <mt-swipe-item class="mt-item">
                  <img src="../../../yt/02.jpg" alt="">
                  <span>1</span>
                </mt-swipe-item>
                <mt-swipe-item class="mt-item">
                  <img src="../../../yt/03.jpg" alt="">
                  <span>2</span>
                </mt-swipe-item>
                <mt-swipe-item class="mt-item">
                  <img src="../../../yt/04.jpg" alt="">
                  <span>3</span>
                </mt-swipe-item>
                <mt-swipe-item class="mt-item">
                  <img src="../../../yt/05.jpg" alt="">
                  <span>4</span>
                </mt-swipe-item>
                <mt-swipe-item class="mt-item">
                  <img src="../../../yt/06.png" alt="">
                  <span>5</span>
                </mt-swipe-item>
            </mt-swipe>
        </div> 
    </div>
</template>

<script>
// 1.引入消息子组件
// import Message from './Message'
// 1.1引入json文件[数据]
// // json 文件引入当前项目 js obj对象
// import messagejson from '../json/messagelist.json'

export default {
    data(){
        return {
            // list:messagejson
        }
    },
    // 2.注册子组件
    // components:{
    //     // "message":Message
    // },
    props:{
        // 声明接收元素数据
        // imgurl:{default:""},
        // id:{default:""},
        // itemClick:{type:Function}
    },
    methods:{
        
        clickItem(id){
            console.log(id);
        },
        handleChange(index) {
    
        }
    }
}
// 3.调用子组件
</script>

<style scoped>
.itemstyle{
    padding: 8px 5px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;    /*水平方向两端对齐*/
    align-items: center;      /*垂直方向居中*/
}
/* 2.图片与文本样式 */
.leftimgandtxt{
    display: flex;
    width: 100%;
}

.mt{
    width:100%;
    height:200px;
    background:#ff0;
    text-align:center;

}

.mt-item>span{
    position:absolute;
    top:150px;
}
.mt-item>img{
    width:100%;
}
</style>
