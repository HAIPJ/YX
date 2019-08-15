$(function(){ $.ajax({
      url:"http://localhost:4000/index",
      type:"get",//请求类型//无请求参数
    //   dataType:"json",返回值类型
    //}).then中的函数会在请求结束后，自动执行//        open(result)//               ↓
    // .then
    success:function(result){
    //   console.log(result);
       
//         for(var i in result){
//             // console.log(result[i].mg)
//             var p1=result[i] 
//             html=` 
//     <div class="print-im">
//         <a href="">
//             <img src="${p1.mg}"data-src="holder.js/352x242?theme=thumb" alt="Thumbnail [352x242]" data-holder-rendered="true">
//             <img class="drimg"src="img2/paper_download.png" data-src="holder.js/52x52?theme=thumb" alt="Thumbnail [52x52]" data-holder-rendered="true">
//             <img class="drimg2" src="img2/paper_download_active.png" data-src="holder.js/52x52?theme=thumb" alt="Thumbnail [52x52]" data-holder-rendered="true">
//         </a>
//     </div>
//     <div class="print-stxt">
//           <a href="">纸名：${p1.title}</a>
//           <div class="print-kg">克重：${p1.kgs}</div>
//           <div class="print-etalon">规格： ${p1.size}</div>
//           <img src="img2/bu.png " data-src="holder.js/66x66?theme=thumb" alt="Thumbnail [66x66]" data-holder-rendered="true">
//       </div>
//       <div class="print-legend">
//           <ul>
//               <li>
//                   <a href="">
//                       <img src="img2/icon_saw.png " data-src="holder.js/15x10? theme=thumb" alt="Thumbnail [15x10]" data-holder-rendered="true">
//                       <span> ${p1.count}</span>
//                   </a>
//               </li>
//               <li>
//                   <a href="">
//                       <img src="img2/icon_down.png" data-src="holder.js/13x13? theme=thumb" alt="Thumbnail [13x13]" data-holder-rendered="true">
//                       <span> ${p1.down}</span>
//                   </a>
//               </li>
//               <li>
//                   <a href="">
//                       <img src="img2/icon_edit.png " data-src="holder.js/  12x11?theme=thumb" alt="Thumbnail [12x11]"    data-holder-rendered="true">
//                       <span> ${p1.info}</span>
//                   </a>
//               </li>
//           </ul>
//       </div>`;
// //     //放回页面中原位置:
    
           
//             document.getElementById("p1").innerHTML=html;
            
//         }
    var p1=result[0];//先取出结果数组中第一个商品
    //将p1的属性，填充进HTML片段中
    
    var html=` 
    <div class="print-im">
        <a href="">
            <img src="${p1.mg}"data-src="holder.js/352x242?theme=thumb" alt="Thumbnail [352x242]" data-holder-rendered="true">
            <img class="drimg"src="img2/paper_download.png" data-src="holder.js/52x52?theme=thumb" alt="Thumbnail [52x52]" data-holder-rendered="true">
            <img class="drimg2" src="img2/paper_download_active.png" data-src="holder.js/52x52?theme=thumb" alt="Thumbnail [52x52]" data-holder-rendered="true">
        </a>
    </div>
    <div class="print-stxt">
          <a href="">纸名：${p1.title}</a>
          <div class="print-kg">克重：${p1.kgs}</div>
          <div class="print-etalon">规格： ${p1.size}</div>
          <img src="img2/bu.png " data-src="holder.js/66x66?theme=thumb" alt="Thumbnail [66x66]" data-holder-rendered="true">
      </div>
      <div class="print-legend">
          <ul>
              <li>
                  <a href="">
                      <img src="img2/icon_saw.png " data-src="holder.js/15x10? theme=thumb" alt="Thumbnail [15x10]" data-holder-rendered="true">
                      <span> ${p1.count}</span>
                  </a>
              </li>
              <li>
                  <a href="">
                      <img src="img2/icon_down.png" data-src="holder.js/13x13? theme=thumb" alt="Thumbnail [13x13]" data-holder-rendered="true">
                      <span> ${p1.down}</span>
                  </a>
              </li>
              <li>
                  <a href="">
                      <img src="img2/icon_edit.png " data-src="holder.js/  12x11?theme=thumb" alt="Thumbnail [12x11]"    data-holder-rendered="true">
                      <span> ${p1.info}</span>
                  </a>
              </li>
          </ul>
      </div>`;
    //放回页面中原位置:
    document.getElementById("p1").innerHTML=html;
    // $("#p1").inner=html
    //从结果集合中取出第二个商品
    var p2=result[1];
    //将p2的属性填充到HTML片段中:
    var html=`
    <div class="print-im">
        <a href="">
            <img src="${p2.mg}"data-src="holder.js/352x242?theme=thumb" alt="Thumbnail [352x242]" data-holder-rendered="true">
            <img class="drimg"src="img2/paper_download.png" data-src="holder.js/52x52?theme=thumb" alt="Thumbnail [52x52]" data-holder-rendered="true">
            <img class="drimg2" src="img2/paper_download_active.png" data-src="holder.js/52x52?theme=thumb" alt="Thumbnail [52x52]" data-holder-rendered="true">
        </a>
    </div>
    <div class="print-stxt">
        <a href="">纸名：EVA软木纸${p2.title}</a>
        <div class="print-kg">克重：${p2.kgs}</div>
        <div class="print-etalon">规格： ${p2.size}</div>
        <img src="img2/bu.png " data-src="holder.js/66x66?theme=thumb" alt="Thumbnail [66x66]" data-holder-rendered="true">
    </div>
    <div class="print-legend">
        <ul>
            <li>
                <a href="">
                    <img src="img2/icon_saw.png " data-src="holder.js/15x10?theme=thumb" alt="Thumbnail [15x10]" data-holder-rendered="true">
                    <span> ${p2.count}</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="img2/icon_down.png" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [13x13]" data-holder-rendered="true">
                    <span> ${p2.down}</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="img2/icon_edit.png " data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [12x11]" data-holder-rendered="true">
                    <span> ${p2.info}</span>
                </a>
            </li>
        </ul>
    </div>`;
    //放回原位置去
    document.getElementById("p2").innerHTML=html;
    // $("#p2").inner=html
//   })
  // 主图2
  
  //向localhost:3000/index发送请求，获得数据
  // $.ajax({
  //   url:"http://localhost:4000/index2/",
  //   type:"get",//请求类型无请求参数
  //   dataType:"json"//返回值类型
  // })//.then中的函数会在请求结束后，自动执行       open(result)              ↓
  // .then(function(result){
  //   console.log(result);
    //将p1的属性，填充进HTML片段中
    var p3=result[0];
    
    var html=` 
        <div class="print-im">
            <a href="">
                <img src="${p3.mg2}" data-src="holder.js/352x242?theme=thumb" alt="Thumbnail [352x242]" data-holder-rendered="true">
            </a>
        </div>
        <div class="print-stxt">
          <a href="">${p3.txt}</a>
          <div class="print-survey">
              <img src="${p3.mg3}" data-src="holder.js/30x30?theme=thumb" alt="Thumbnail [30x30]" data-holder-rendered="true">
              <div class="survey-text">
                  <span>${p3.titl}</span>
                  <img src="${p3.mg4}" data-src="holder.js/14x13?theme=thumb" alt="Thumbnail [14x13]" data-holder-rendered="true"  >
              </div>
              <span>${p3.times}</span>
          </div>
      </div>
      <div class="print-legend">
          <ul>
              <li>
                  <a href="">
                      <img src="img2/icon_saw.png" data-src="holder.js/15x10?theme=thumb" alt="Thumbnail [15x10]" data-holder-rendered="true">
                      <span> ${p3.count2}</span>
                  </a>
              </li>
              <li>
                  <a href="">
                      <img src="img2/icon_down.png" data-src="holder.js/13x13?theme=thumb" alt="Thumbnail [13x13]" data-holder-rendered="true">
                      <span> ${p3.down2}</span>
                  </a>
              </li>
              <li>
                  <a href="">
                      <img src="img2/icon_edit.png" data-src="holder.js/12x11?theme=thumb" alt="Thumbnail [12x11]" data-holder-rendered="true">
                      <span> ${p3.info2}</span>
                  </a>
              </li>
          </ul>
      </div>`;
    //放回页面中原位置:
    document.getElementById("p3").innerHTML=html;
    // $("#p3").inner=html
    //从结果集合中取出第二个商品
    var p4=result[1];
    //将p2的属性填充到HTML片段中:
    var html=`
    <div class="print-im">
        <a href="">
            <img src="${p4.mg2}" data-src="holder.js/352x242?theme=thumb" alt="Thumbnail [352x242]" data-holder-rendered="true">
        </a>
    </div>
    <div class="print-stxt">
    <a href="">${p4.txt}</a>
    <div class="print-survey">
        <img src="${p4.mg3}" data-src="holder.js/30x30?theme=thumb" alt="Thumbnail [30x30]" data-holder-rendered="true">
        <div class="survey-text">
            <span>${p4.titl}</span>
            <img src="${p4.mg4}" data-src="holder.js/14x13?theme=thumb" alt="Thumbnail [14x13]" data-holder-rendered="true">
        </div>
        <span>${p4.times}</span>
    </div>
  </div>
  <div class="print-legend">
      <ul>
          <li>
               <a href="">
                <img src="img2/icon_saw.png" data-src="holder.js/15x10?theme=thumb" alt="Thumbnail [15x10]" data-holder-rendered="true">
                <span>${p4.count2} </span>
              </a>
          </li>
          <li>
              <a href="">
                 <img src="img2/icon_down.png" data-src="holder.js/13x13?theme=thumb" alt="Thumbnail [13x13]" data-holder-rendered="true">
                  <span>${p4.down2} </span>
              </a>
          </li>
          <li>
              <a href="">
                  <img src="img2/icon_edit.png" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [12x11]" data-holder-rendered="true">
                  <span>${p4.info2} </span>
              </a>
          </li>
      </ul>
  </div>`;
    //放回原位置去
    document.getElementById("p4").innerHTML=html;
    // $("#p4").inner=html
    }
    
    })
    // 第一图
    //1. 查找触发事件的元素 //2. 绑定事件处理函数 //3. 查找要修改的元素//4. 修改元素//给自己的*爹*+active//return *爹*//给*爹*的所有兄弟去掉active
    $("[data-toggle=tab]").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active")
    })
    $('#split_div .adv_normal').mouseover(function () {
            $(this).hide();
            $(this).siblings().show();
        })
    $('#split_div .adv_active').mouseout(function () {
        $(this).hide();
        $(this).siblings().show();
    })
   
    // 轮播其余图通用
   
        var length = $("#side ul li").length;
        var index = $("#side ul li").index();
    
        var timer = null;
        $("#side ul li").eq(0).show().siblings().hide();
        //鼠标移入的时候清空定时器
        $("#side").hover(()=>{
        clearInterval(timer);
        },()=>{
        timer = setInterval(moveLeft,10000);
        });
    
        //对应原点
        $("#main").on("mouseenter","li",function(){
        clearInterval(timer);
        var index = $(this).index();
        $("#side ul li").eq(index).show().siblings().hide();
        showClass(index);
        });
    
        //左移
        function moveLeft(){
        index++;
        if(index==length){
            index = 0;
        }
        $("#side ul li").eq(index).show().siblings().hide();
        showClass(index);
    
        }
        //右移
        function moveRight(){
        index--;
        if(index == -1){
            index = length-1;
        }
        $("#side ul li").eq(index).show().siblings().hide();
        showClass(index);
        }
        function showClass(index){
        $("#main>ul>li").eq(index).addClass('active').siblings().removeClass('active');
        }
        timer = setInterval(moveLeft,10000);
        // console.log(timer);
    // })

    // 下载图标
    // $(function(){
        $("div.print").hover(
            function(){
        // 2绑定事件处理函数
        // 当鼠标进入div时
        // mouseenter(
            // function(){
            // 3查找要修改的元素
            $(this).find(".drimg").css({opacity:1}).show()
            },
        // 当鼠标移除事件函数时
        // .mouseleave(
            function(){
            $(this).find(".drimg").css({opacity:0}).hide()
            }
        )
    //向localhost:3000/index发送请求，获得数据
})


