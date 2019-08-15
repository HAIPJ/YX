<template>
    <div class="page-head">
        <!-- 顶部导航条 -->
        <span>{{leftTitle}}</span>
        <!-- <div class="right-head">
            <div @click="search" class="searchdiv">
                <img :src="rightFirstImg" />
            </div>
            <div @click="add3" class="searchdiv">
                <img :src="rightSecondImg" />
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    // 左侧文字 和 右侧两张图片
    props:{
        leftTitle:{default:""},
        // rightFirstImg:{default:""},
        // rightSecondImg:{default:""},
        // search:{type:Function},
        // add3:{type:Function}
    }
}
</script>

<style scoped>
.page-head{
    width:100%;
    display: flex;
    position: fixed; top: 0; 
    z-index: 999;
    /* width: 100%; */
    justify-content: space-between;  /* 两端对齐 */
    align-items: center; /* 垂直居中*/
    background: #ececec;
    color: #000;
    font-size: 18px;
    
    height: 48px;text-align:center;
    
}
span{
    margin: 0 auto;
}
/* .right-head{
    display: flex;
}
.searchdiv{
    display: flex;
    align-items: center;
    height: 48px;
}
.searchdiv img{
    width:25px;
}
.searchdiv img:last-child{
    margin-right: 20px;
} */
</style>
