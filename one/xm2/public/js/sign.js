// 1查找触发事件的元素
$("[data-toggle=tab]")
// 2绑定事件处理函数
.click(function(){
  // 3获取要修改的元素
  $(this).parent().// 4修改元素,给自己的爹加active
  addClass("active")
  // return 爹
  // 给爹的所有兄弟去掉active
  .siblings().removeClass("active")
})


$(function () {
    // 按钮单击时执行
    $("#btn").click(function () {
        var uemail=$("#ema").val()
        var uname = $('#ename').val();
        var upwd = $('#pwd').val();
        var upwd2 = $('#pwd2').val();

        if (!checkParams({
            uemail:uemail,
            uname:uname,
            upwd:upwd,
            upwd2:upwd2
        })) {
            return false;
        }

        $.post("http://localhost:4000/sign",
            {
                uemail:uemail,
            uname:uname,
            upwd:upwd,
            upwd2:upwd2
            }, function (data) {
                if (data.errorCode === 0) {
                    msg('注册成功~');
                } else {
                    msg('注册失败:' + data.msg);
                }
            });
    });

    // 校验提交数据
    function checkParams(params) {
        if (!params.uemail) {
            msg('邮箱不能为空~');

            return false;
        }
        if (!params.uname) {
            msg('用户名不能为空~');

            return false;
        }
        if (!params.upwd) {
            msg('密码不能为空~');

            return false;
        }
        if (!params.upwd2) {
            msg('密码2不能为空~');

            return false;
        }
        return true;
    }

    // 弹出框方法
    // function msg(msg) {
    //     $('#msg').html(msg);
    //     $('#msgModal').modal({
    //         keyboard: false
    //     });
    // }
});



// //onblur失去焦点事件，用户离开输入框时执行 JavaScript 代码：
// //函数1：验证邮箱格式
//  function validate_username(uemail){
//      //定义正则表达式的变量:邮箱正则
//      var uemail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
//      //console.log(username);
//      if(uemail !="" && username.search(emailReg) != -1)
//      {
//          document.getElementById("test_user").innerHTML = "<font color='green' size='3px'>√邮箱格式正确</font>";
//      }else{
//          document.getElementById("test_user").innerHTML = "<font color='red' size='3px'>邮箱格式错误</font>";
//      }
//  }

// //函数2：验证密码是否符合要求：匹配6位密码，由数字和字母组成：
//  function validate_password(pupwd){
//      //^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6-10}$
//    //测试密码：12345y
//      var passwordReg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;
//      if(password != "" && password.search(passwordReg) != -1)
//      {
//          document.getElementById("test_pw").innerHTML = "<font color='green' size='3px'>√密码格式正确</font>";
//      }else{
//          document.getElementById("test_pw").innerHTML = "<font color='red' size='3px'>密码格式错误</font>";
//          alert("密码有6位，由数字和字母组成!");
//      }
//  }
 
// //函数3：验证两次输入的密码是否一样
//   function validate_password2(password2){
//      var password = document.getElementById("password").value;
//      //测试：console.log(password);
//      //测试：console.log(password2);
//      if (password == ""){
//        document.getElementById("is_test_pw").innerHTML = "<font color='red' size='3px'>密码不为空</font>";
//    }else if(password==password2){
//          document.getElementById("is_test_pw").innerHTML = "<font color='green' size='3px'>√两次输入的密码相同</font>";
//      }else{
//          document.getElementById("is_test_pw").innerHTML = "<font color='red' size='3px'>两次输入的密码不相同</font>";
//          console.log("密码有6位，由数字和字母组成!");
//      }
//  } 
 
// //函数4：验证表单是否已经填好
//  function validate_form(){
//      var username = document.getElementById("username").value;
//      var password = document.getElementById("password").value;
//      var password2 = document.getElementById("password2").value;
//      //console.log("表单填写正确，可以正常提交！");
 
//      //这三个，如果任何一个有问题，都返回false
//      //18128@qq.com		12345y
//      var emailReg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
//      var passwordReg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;
     
//      if(username != "" && emailReg.test(username)){
//          if(password !="" && passwordReg.test(password)){
//              if(password2==password){
//                  alert("信息填写正确，可以正常提交！");
//                  console.log("信息填写正确，可以正常提交！");
//                  return true;
//              }else{
//                  alert("密码不一致，提交失败，请重新填写！");
//                  console.log("密码不一致，提交失败，请重新填写！");
//                  return false;
//              }
//          }else{
//              alert("密码格式错误，提交失败，请重新填写！");
//              console.log("密码格式错误，提交失败，请重新填写！");
//              return false;
//          }
//      }else{
//          alert("注册的账号不符合要求，提交失败，请重新填写！");
//          console.log("注册的账号不符合要求，提交失败，请重新填写！");
//          return false;
//      }
//  }


