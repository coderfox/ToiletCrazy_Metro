var config = {
	"site_title" : "TC",
	"api_uri" : "back/api.php"
};
var api_call = function(method, c, params, callback) {
	var func = null;
	if (method === "GET") {
		func = $.get;
	} else if (method === "POST") {
		func = $.post;
	}
	p = params;
	p.c = c;
	func(config["api_uri"], p, callback, "json");
};
$.extend({
	getUrlVars : function() {
		var vars = [], hash;
		var hashes = window.location.href.slice(
				window.location.href.indexOf('?') + 1).split('&');
		for ( var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	getUrlVar : function(name) {
		return $.getUrlVars()[name];
	}
});