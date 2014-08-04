var config={
	"site_title":"TC",
	"api_uri":"back/api.php"
};
var api_call = function  (method,params,callback) {
	var func=null;
	if(method==="GET"){
		func=$.get;
	}else if(method==="POST"){
		func=$.post;
	}
	func(config["api_uri"],params,callback,"json");
};