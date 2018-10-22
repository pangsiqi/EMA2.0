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

	$(".btn-login").on("click",function(){
		var userName = $("#username").val();
		var userPass = $("#password").val();
		console.log(userName);
		console.log(userPass);
		for(var i = 0;i<userinfo.length;i++){
			if(userName == userinfo[i].name && userPass == userinfo[i].pass){
				console.log(333);
				
				console.log(1111);
				window.location.href="./my_app.html";
				return;
			}else{
				alert("用户名或密码错误");
				return;
			}
		}
	});
	
		
			
});