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