
	function openAddMgr(){
	  layer.open({
      type: 2,
      area: ['600px', '360px'],
      shadeClose: true, //点击遮罩关闭
      content:'http://127.0.0.1:8020/EMA2.0/views/user/user_add.html'
    });
	}