/* Toolbar button listener */
chrome.browserAction.onClicked.addListener(sendMsg);

/* Keyboard shortcut listener */
chrome.commands.onCommand.addListener(sendMsg);

function sendMsg(tab) {
	chrome.tabs.sendMessage(tab.id, {
		command: "setmaxwidth",
		maxWidth: "900px"
	}, null);
}