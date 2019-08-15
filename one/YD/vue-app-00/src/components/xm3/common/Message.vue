<template>
    <div class="container">
       <!-- 基本用法 -->

<!-- <mt-swipe :auto="400">
  <mt-swipe-item>
      <img src="../../../yt/01.jpeg" alt="">
  </mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe> -->
<!-- 隐藏指标 -->

<!-- <mt-swipe :show-indicators="false">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe> -->
<!-- 取消自动播放 -->

<mt-swipe :auto="0">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
<!-- change 事件 -->

<!-- change 每次滑动项目切换时触发事件，参数是输入项目的索引 -->

<!-- <mt-swipe @change="handleChange">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe> -->

            
    </div> 
</template>

<script>

export default {
    data(){
        return {}
        
    },
    props:{
        // 声明接收元素数据
        // imgurl:{default:""}
    }
    ,
    methods: {
  handleChange(index) {
    
  }
}
    // methods:{
        // Carousel(){
        //     // 轮播其余图通用
        //     $(()=>{
        //     var length = $("#side ul li").length;
        //     var index = $("#side ul li").index();
        //     var timer = null;
        //     $("#side ul li").eq(0).show().siblings().hide();
        //     //鼠标移入的时候清空定时器
        //     $("#side").hover(()=>{
        //       clearInterval(timer);
        //     },()=>{
        //       timer = setInterval(moveLeft,10000);
        //     });
        //     //对应原点
        //     $("#main").on("mouseenter","li",function(){
        //       clearInterval(timer);
        //       var index = $(this).index();
        //       $("#side ul li").eq(index).show().siblings().hide();
        //        showClass(index);
        //     });
        //     //左移
        //     function moveLeft(){
        //       index++;
        //       if(index==length){
        //         index = 0;
        //       }
        //       $("#side ul li").eq(index).show().siblings().hide();
        //       showClass(index);
        //     }
        //     //右移
        //     function moveRight(){
        //       index--;
        //       if(index == -1){
        //         index = length-1;
        //       }
        //       $("#side ul li").eq(index).show().siblings().hide();
        //       showClass(index);
        //     }
        //     function showClass(index){
        //       $("#main>ul>li").eq(index).addClass('active').siblings().removeClass('active');
        //     }
        //     timer = setInterval(moveLeft,10000);
        //     // console.log(timer);
        //     })
        // }
    // }
}


</script>

<style scoped>
.container{
    width:100%;
    height:400px;
    
}

/* 3.图片样式 */
/* .imgstyle{
    width: 50px; height: 50px;
} */
/* 主轮播图 */
/* #side ul li img{
width:100%;
height:463px;
line-height:463px;
/* float:left; */
/* border:1px solid #fff;
text-align:center;
position:absolute;
} */ 
/* #side a{
    font-size:20px;
    position:relative;
    top:90px;
} */
/* #container a:hover{
    text-shadow:2px 2px 2px gray;
} */
/* #main li{
   width:10px;
   height:10px;
    float:left;
    margin:0 5px;
    border:1px solid black;
    border-radius:50%;
    position:relative;
    top:-30px;
    left:510px;
    
}
.active{
    background:black
} */
</style>
