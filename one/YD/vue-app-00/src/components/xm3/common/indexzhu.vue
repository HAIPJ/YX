<template>
    <div class="main-content">
        <div class="">
        <div class="m-text">来一起学习</div>
        <div class="matt">
            <div class="matt-img">
                <img src="../../../yt/09.jpeg" alt="">
            </div>
            <div class="space">
                <span href="#">学了吗？思考了吗？</span>
                <a href="#">你的学习计划</a>
            </div>
        </div>
        <div class="matt1">
            <div class="matt-img1">
                <img src="../../../yt/07.jpg" alt="">
            </div>
            <div class="space1">
                <span>思维的导向</span>
                <a href="#">思维的小练习</a>
                <a href="#">思维的方法</a>
            </div> 
        </div>
        <div>
            <div class="im">
                <img src="../../../yt/16.jpg" alt="">
                <div>
                    <a href="#">题库</a>
                </div>
            </div>
            <div class="im">
                <img src="../../../yt/13.jpeg" alt="">
                <div>
                    <a href="#">书库</a>
                </div>
            </div>
            <div class="im">
                <img  src="../../../yt/17.jpg" alt="">
                <div>
                    <a href="#">名师讲解</a>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="pri">
        <div class="case">
            <div>案例</div>
            <div>
                <img src="../../../yt/19.jpg" alt="">
                <ul>
                    <li><a href="#">高中基础知识</a></li>
                    <li><a href="#">高中重点知识</a></li>
                    <li><a href="#">奥数小练习</a></li>
                </ul>
            </div>
        </div>
        <div class="case">
            <div>难度题解</div>
            <div>
                <img src="../../../yt/20.jpg" alt="">
                <ul>
                    <li><a href="#">关于抛物线的题解</a></li>
                    <li><a href="#">万有引力的的题解</a></li>
                    <li><a href="#">无机化学</a></li>
                </ul>
            </div>
        </div>
        <div class="case">
            <div>外语</div>
            <div>
                <img src="../../../yt/23.jpg" alt="">
                <ul class="imt">
                    <li><a href="#">口语练习</a></li>
                    <li><a href="#">听力练习</a></li>
                    <li><a href="#">单词本</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="pay">
        <div>注意</div>
        <div>
            <Ul>
                <li>初升高注意事项</li>
                <li>△高考的注意</li>
                <li>高考志愿填报</li>
                <li>公务员报考事项</li>
            </Ul>
        </div>
        <div>
            <Ul>
                <li>学习方法</li>
                <li>留学注意</li>
                <li>国家补助政策</li>
                <li>关于农城学生的问题</li>
            </Ul>
        </div>
    </div>
    </div>
</template>
<script>
export default {
   data(){
       return{}
   } ,
   methods:{
   }
}
</script>
<style scoped>
.m-text{
    font-size: 22px;
    color:#595959;
    margin: 5px  0 5px 5px;
    background:#cee7e6
}
.main-content{
    width:100%;
    height:350px;
    background:#fff;
    
}
.matt{
    width:60%;
    height:210px;
    background:rgb(236, 235, 235);
    margin:0 5px;
    float:left
}
.matt-img{
    width:100%;
    height:145px;
    /* background:#00f */
}
.matt-img>img{
    width:100%;
}
.matt-img1>img{
    width:100%
}
.space{
    display:block;
    width:100%;
    height:65px;
 
   
}
.space>span{
    color:#8ad3cf;
    font: bold 12px;
    display:inline-block;
    margin:5px 0 5px  15px ;
}
.space>a{
    text-decoration:none;
    color:#595959;
    float:left;
    margin-left:15px;
}

.space1{
    display:block;
    width:100%;
    /* height:65px; */
} 
.space1>span{
    color:#83d5e0;
    font: bold 12px;
    display:inline-block;
    margin:15px 0 5px  15px ;
}
.space1>a{
    text-decoration:none;
    color:#595959;
    float:left;
    margin:5px 0 10px 15px;
}
.matt1{
    float:left;
    display:block;
    width:36%;
    height:210px;
    background:rgb(229, 229, 231);
}
.im{
    width:32%;
    height:115px;
    margin:0 2px;
    margin-top:5px;
    background:rgb(231, 230, 230);
    float:left;
}
.im>img{
    width:100%;
}
.im>div{
    text-align:center;
}
.im a{
    text-decoration: none;
    color:rgb(77, 73, 73);
    
}

.case{
    width:100%;
    display: block;
    float:left;
}
.case div:nth-child(1){
    color: #595959;
}
.case img{
    width:30%;
    float:left;
}
ul{ padding:0;
    margin:0;}
.case ul {
    width:68%;
    height:71px;
    float:left;
   
    background:#a8a6a6
}

.case li{
    padding-left: 25px;
    list-style: none;
    
}
.case a{
    text-decoration: none;
    color:#fff;
    
}

.pay{
    width:100%;
    display: block;
    float:left;
}
.pay>div:nth-child(1)
{
    color: #595959;
}
.pay ul{
    background:rgb(233, 229, 229);
    width:50%;
}
.pay li{
    list-style:none;
    color:#595959;
    width:100%;
    padding-left:10px;
    display: inline-block;
    
}
.pay ul:nth-child(1){
    float:left;
    
}
</style>

