// 高级搜索
function btn(){
    $("#box").toggle();
    var search_icon = $("#search i").eq(1).attr("class");
    // console.log(search_icon);
    if (search_icon == "icon-arrow1-down") {
        $("#search i").eq(1).removeClass();
        $("#search i").eq(1).addClass("icon-arrow1-up");
    }else{
        $("#search i").eq(1).removeClass();
        $("#search i").eq(1).addClass("icon-arrow1-down");
    }
    
}
// 滚动条
        $(document).ready(function() {
                // $.fn.zTree.init($("#deptTree"), setting, zNodes);
                $("navbar-static-side").height(document.body.clientHeight - 100);
                console.log(document.body.clientHeight - 100);

                $('.col_but').on('click', '.icon-arrow1-down', function() {
                    console.log(111);
                    $(this).toggleClass('icon-arrow1-up') /*达到切换背景箭头的效果*/
                    $(this).parent().parent().next().slideToggle();

                 });
        });
// 点击添加弹出框
function openAddMgr() {
    $(".mask").show();
    $(".mask_div").show();
    //放大
    $(".mask_anniu  .icon-maximization").on("click", function() {
        $(".mask_div").width(document.body.clientWidth);
        $(".mask_div").height(document.body.clientHeight - 60);
        $(".mask_div").css("margin", "0%");
        $(".mask_div").css("top", "60px");
        $(".mask_max .mask_span i").toggleClass("icon-restore", );
    });
    //关闭
    $('.mask_anniu').on('click', '.icon-close1', function() {
        $('.mask_div').hide();
        $('.mask').hide();
    });
    //折叠icon-arrow1-down
    $('.col_but').on('click', '.icon-arrow1-down', function() {
        $(this).toggleClass('icon-arrow1-up') /*达到切换背景箭头的效果*/
        $(this).parent().parent().next().slideToggle();

    });

}

// 手风琴折叠
//折叠icon-arrow1-down
