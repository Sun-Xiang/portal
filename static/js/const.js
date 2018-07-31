const local = 0;

if(local == 1){
	//远程路径
	var site_url_item="http://www.fuyto.com/product-api/";
	var site_url_sso="http://www.fuyto.com/sso/";
	
}else{
	//本地路径
	var site_url_item="http://localhost:9091/product-api/";
	var site_url_sso="http://localhost:9999/sso/";
}

//portal里的jquery.cookie.js
var new_cookie="";
new_cookie=document.createElement("script");
new_cookie.setAttribute("type","text/javascript");
new_cookie.setAttribute("src",site_url_item+"js/jquery.cookie.js");

//product里的itembasicshow.css
var new_itembasicshowcss="";
new_itembasicshowcss=document.createElement("link");
new_itembasicshowcss.setAttribute("type","text/css");
new_itembasicshowcss.setAttribute("media","all");
new_itembasicshowcss.setAttribute("rel","stylesheet");
new_itembasicshowcss.setAttribute("href",site_url_item+"css/itembasicshow.css");

//product里的jqzoom.js
var new_jqzoom="";
new_jqzoom=document.createElement("script");
new_jqzoom.setAttribute("type","text/javascript");
new_jqzoom.setAttribute("src",site_url_item+"js/jqzoom.js");

//product里的itemimg.js
var new_itemimg="";
new_itemimg=document.createElement("script");
new_itemimg.setAttribute("type","text/javascript");
new_itemimg.setAttribute("src",site_url_item+"js/itemimg.js");

//product里的itembasicshow.js
var new_itembasicshow="";
new_itembasicshow=document.createElement("script");
new_itembasicshow.setAttribute("type","text/javascript");
new_itembasicshow.setAttribute("id","itembasicshow");
new_itembasicshow.setAttribute("src",site_url_item+"js/itembasicshow.js");

