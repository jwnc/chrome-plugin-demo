$(document).dblclick(function(){
  var str = window.getSelection().toString();
  //window.getSelection().collapseToEnd(); //取消选择
  str = str.replace(/\s+$/, '');
  
  tranIfCfg(str);
});

function tranIfCfg(word){
	chrome.storage.sync.get({ITtran: true}, function(items) {
		console.log('tran:'+items.ITtran);
		if(items.ITtran){
			tranWithWord(word);
		}
	});
}

function tranWithWord(word){
	if(word && /^[a-z]+$/i.test(word)){
		console.log('选中单词.'+word);
		chrome.extension.sendMessage({uri:"xdd_add",data:{},url:"http://47.93.99.106/readlog/readlog?word="+word}, function(response) {
			console.info(response);
			var mean = response.cn_mean;
			if(mean){
				msg = mean.replace('\n', '<br>');
			}
			else{
				msg= '<font color="red">未找到该单词.</font>';
			}
			layer.alert(msg,{title: word, shadeClose: true,closeBtn: 1, btn:['详情'], detail: function (index) { 
				window.open('http://www.iciba.com/'+word);
				layer.close(index);
			}});
		});
  }
}

