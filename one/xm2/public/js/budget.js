
$(function(){
    $("[ data-toggle=tab]").click((e)=>{
        e.stopPropagation();
        e.preventDefault();
    this.parent().addClass("active"),
    this.siblings().removeClass("active")
    });
    $("#clik")
    // 2绑定事件处理函数
    // 当鼠标进入div时
    .mouseenter(function(){
        // 3查找要修改的元素
        $(".tbr")
        // 4修改元素
         .css({display:"block"})
         $(".bud-nav").css({height:"180px"})
    })
    // 当鼠标移除事件函数时
    .mouseleave(function(){
        $(".tbr").css({border:0,display:"none"})
        $(".bud-nav").css({border:0,height:"60px"})
    })

    $(document).ready(function(){
    $(".spinner").click(function(){
        $(".system").toggle().css({height:"80px"})
       })
    }) 
    $(document).ready(function(){
    $(".dire").click(function(){
        $(".grain").toggle().css({height:"120px"})
        $(".system").css({height:"200px"})
       })
    }) 
    // .click(function(){$(".system").css({display:"none"})})

    // $("[data-trigger=dropdown]").click(function(e){
        // 取消冒泡
        // e.stopPropagation();
        // e.preventDefault();
        // 设置弹出层位置
        // var offset=$(e.target).offset();

        // $("#drop").css({top:offset.top+$(e.target).height()+"px",left:offset.left+$(e.target).width()+"px"});
        //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。 
    //     $("#drop").toggle().css({border:"1px solid #bababa","border-top":"1px solid #bababa"}).show()
    //     $("#clik").css({border:"1px solid #bababa",height:"55px"})
    // })
    // $(window).click(function(e){
    //     $("#drop").next().css({border:0,display:"none"}).hide()
    //     $("#clik").css({border:0})
        
    // })  
})