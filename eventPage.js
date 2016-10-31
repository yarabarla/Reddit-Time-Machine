function checkForReddit(tabID, changeInfo, tab) {
	if (tab.url.indexOf('https://www.reddit.com') == 0) {
		chrome.pageAction.show(tabID);
		console.log("matched")
	}
}

chrome.tabs.onUpdated.addListener(checkForReddit);
