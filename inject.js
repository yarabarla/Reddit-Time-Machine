/*function checkForReddit(tabID, changeInfo, tab) {
	if (tab.url.indexOf('https://www.reddit.com') == 0) {
		chrome.pageAction.show(tabID);
		console.log("matched")
	}
}

chrome.tabs.onUpdated.addListener(checkForReddit);*/

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

			chrome.pageAction.show(

      console.log("Hello. This message was sent from inject.js");

    }
	}, 10);
});
