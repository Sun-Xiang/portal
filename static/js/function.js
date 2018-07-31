
//http://10.10.10.108:8090/product-api/product/info/list
var list_URL="http://10.10.10.108:9091/product-api/product/info/list";

//搜索函数
function crosRequest(){
	$.ajax({
		url:list_URL,
		type:'get',
		dataType:'json',
		success:function (data) {  
			alert(data.status+"  "+data.result[0].id);  
			getValue(data.result);
		},  
		error:function (err) {  
			alert('出现错误了!!!');  
		}
	});
}

//打印对象信息
 function outputObj(obj) {  
    var description = "";  
    for (var i in obj) {  
        description += i + " = " + obj[i] + "\n";  
    }  
    alert(description);  
 } 
 //获取get函数
function getValue(url){
	var arr = url.split("?");
	if(arr.length == 1){  
		arr[1]="st=20";
	} 
	var value_arr = arr[1].split("&");
	var obj = {};  
	for(var i = 0; i < value_arr.length; i++){  
	    var key_val = value_arr[i].split("=");  
	    obj[key_val[0]]=key_val[1];  
	}  
	return obj;
}

//ajax返回
function getNewDate( flyNum ){
    var thisDate
    $.ajax({
        url: list_URL,
        type: 'GET',
        dataType: 'json',
        async: false,
    }).done(function(res) {
        thisDate = res;    //需要返回thisDate
    })
    return thisDate;
}

//计算剩余时间
function GetDateDiff(startTime, endTime, diffType) {
    //startTime = startTime.replace(/\-/g, "/");
    endTime = endTime.replace(/\-/g, "/");
    diffType = diffType.toLowerCase();
    var sTime =new Date(startTime);
    var eTime =new Date(endTime);
    var timeType =1;
    switch (diffType) {
        case"second":
            timeType =1000;
        break;
        case"minute":
            timeType =1000*60;
        break;
        case"hour":
            timeType =1000*3600;
        break;
        case"day":
            timeType =1000*3600*24;
        break;
        default:
        break;
    }
    return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(timeType));
}

//添加cookie
function addCookie(name,value,expiresHours){
	var cookieString=name+"="+escape(value);
	//判断是否设置过期时间
	if(expiresHours>0){
		var date=new Date();
		date.setTime(date.getTime+expiresHours*3600*1000);
		cookieString=cookieString+"; expires="+date.toGMTString();
	}
	document.cookie=cookieString;
}

//获取指定cookie
function getCookie(name){
	var strCookie=document.cookie;
	var arrCookie=strCookie.split("; ");
	for(var i=0;i<arrCookie.length;i++){
		var arr=arrCookie[i].split("=");
		if(arr[0]==name)return arr[1];
	}
	return "";
}

//撤除指定cookie
function deleteCookie(name){
	var date=new Date();
	date.setTime(date.getTime()-10000);
	document.cookie=name+"=v; expires="+date.toGMTString();
}


































