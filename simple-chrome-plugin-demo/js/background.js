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