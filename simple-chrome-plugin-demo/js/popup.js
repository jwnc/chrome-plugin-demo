$(function() {
	chrome.storage.sync.get({ITtran: true}, function(items) {
		//document.body.style.backgroundColor = 'black';
		showbtnTip(items.ITtran);
	});
});

$('#changeTranCfg').click(e => {
	chrome.storage.sync.get({ITtran: true}, function(items) {
		var ITtran = items.ITtran;
		//alert('old:'+ITtran);
		var newITtran = !ITtran;
		chrome.storage.sync.set({ITtran: newITtran}, function() {
			//alert('保存成功! new:'+!ITtran);
			showbtnTip(newITtran);
		});
	});
	
});

function showbtnTip(flag){
	$('#changeTranCfg').val(flag ? '正在使用' : '已经禁用');
	var iconPath = flag ? 'icon.png' : 'icon2.png';
	chrome.browserAction.setIcon({path : {
		"48": iconPath,
		"64": iconPath,
		"128": iconPath
	}});
}
