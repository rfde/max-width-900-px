/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	if (msg.command && (msg.command == "setmaxwidth")) {
		var bodyTag = document.getElementsByTagName("body")[0];
		bodyTag.style.maxWidth = msg.maxWidth;
		bodyTag.style.margin = "auto";
	}
});