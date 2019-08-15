 
$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("header");
            // 动态创建link元素，引入header.css,自动添加到<header>
            $(`<link rel="stylesheet" href="./css/header.css">`).appendTo("head");
            // 放大镜弹出
            $('#hea-btu').click(function (e) {  
    //取消事件冒泡  
        e.stopPropagation();  
        //设置弹出层的位置  
        var offset = $(e.target).offset();  
        $('#btn-cd').css({ top: offset.top + $(e.target).height() + "px", left: offset.left });  
        //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
        $('#btn-cd').toggle("show");  
            }) ;
            // 下拉菜单
            //先实现单击按钮下拉
            //点击自身隐藏弹出层。   
            $('#hea-cd').click(function (e) { $(this).prev().hide() }) ;
            $('[data-trigger=dropdown]').click(function (e) {  
        //取消事件冒泡  
            e.stopPropagation(); 
            //设置弹出层的位置
            e.preventDefault();  
            var offset = $(e.target).offset();  
            $('#drop').css({ top: offset.top + $(e.target).height() + "px", left: offset.left });  
            //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
            $('#drop').toggle().css("height","120px");
            $("#header").css("height","120px");
            
            });  
            //点击自身隐藏弹出层。 
            $(window).click(function (e) { $('#drop').next().css("height",0)});
        }
    })
})
    


