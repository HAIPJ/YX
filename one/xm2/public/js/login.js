$(function () {
  $('#btn').click(function () {
    var uemail=$("#ema").val();
    var upwd=$("#pwd").val();
    console.log(uemail)
    console.log(upwd)
      if (uemail == "" ) {
          alert("用户名不能为空！");
          // return
      }
      if(upwd==""){
        alert("密码不能为空")
        // return
      }
      $.ajax({
          url: "http://localhost:4000/login.php",
          type: "get",
          data:{uemail,upwd},
          dataType:"json",
          success:function (msg) {console.log(1)
              if (msg == "success") {
                  parent.document.location.href = "index.htm"; //如果登录成功则跳到管理界面
                  // parent.tb_remove();
                  
              }
              if (msg == "fail") {
                  alert("登录失败！");
              }
          },
          // $( function(XMLHttpRequest, textStatus, thrownError) {})
      })
  })

  //  1查找触发事件的元素
   $("[data-toggle=tab]")
  //  2绑定事件处理函数
   .click(function(){
    //  3获取要修改的元素
     $(this).parent().// 4修改元素,给自己的爹加active
     addClass("active")
     return 爹
    //  给爹的所有兄弟去掉active
     .siblings().removeClass("active")
   })
  // 1. 查找触发事件的元素
    $(".my-sma")
  .click(function(){//2. 绑定事件
  // 获得当前点击的图片元素
    var $a=$(this);
  // 3. 查找要修改的元素
    $(".my-big")
  // 4. 修改元素
  .attr(
    "src",
    $img.attr("data-target")  
  )
  })
})
