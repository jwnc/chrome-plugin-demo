﻿$(document).dblclick(function(){
  var str = window.getSelection().toString();
  //window.getSelection().collapseToEnd(); //取消选择
  if(str.length > 0){
    console.log('选中单词并复制.'+str);
	chrome.extension.sendMessage({uri:"xdd_add",data:{},url:"http://localhost:8088/readlog/readlog?word="+str}, function(response) {
                console.info("xdd_add",response);
				var mean = response.cn_mean;
				if(mean){
					msg = mean.replace('\n', '<br>');
				}
				else{
					msg= '<font color="red">未找到该单词.</font>';
				}
				layer.alert(msg,{shadeClose: true,closeBtn: 1, yes: function (index) { 
					window.open('http://www.iciba.com/'+str);
					layer.close(index);
				}});
            });
  }
});