$(function(){
	var userinfo = new Array();
	userinfo[0] = {
		name:"fuyg",
		pass:"fuyg"
	};
	userinfo[1] = {
		name:"jidd",
		pass:"jidd"
	};

	$(".btn").on("click",function(){
		var userName = $("#username").val();
		var userPass = $("#password").val();
		console.log(userName);
		console.log(userPass);
		for(var i = 0;i<userinfo.length;i++){
			if(userName == userinfo[i].name && userPass == userinfo[i].pass){
				alert("登录成功");
				window.location.href="./my_app.html";
				return;
			}else{
				alert("用户名或密码错误");
				return;
			}
		}
	});
	
		
			
});