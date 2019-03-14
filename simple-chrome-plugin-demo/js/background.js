$(function() {
	chrome.storage.sync.get({ITtran: true}, function(items) {
		//document.body.style.backgroundColor = 'black';
		var iconPath = items.ITtran ? 'icon.png' : 'icon2.png';
		chrome.browserAction.setIcon({path : {
			"48": iconPath,
			"64": iconPath,
			"128": iconPath
		}});
	});
});

// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	console.log('收到来自content-script的消息：');
	console.log(request, sender, sendResponse);
	//sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
	var url = request.url;
	console.log(url);
	$.ajax({
		type:"get",
		url:url,
		success:function(response){
			//alert('success!'+response);
			sendResponse(response);
		},
		error:function(e){
			//失败执行
			alert(e.status+','+ e.statusText);
		}
	});
		
	return true;
});