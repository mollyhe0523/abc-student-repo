// chrome.runtime.onMessage.addListener(function(request, sender) {
//     chrome.tabs.update(sender.tab.id, {url: request.redirect});
//     console.log("send message")
// });
// chrome.commands.onCommand.addListener(function(command) {
//    console.log('Command:', command);
//  });
var context_id = -1;
console.log("Initializing IME");

chrome.input.ime.onFocus.addListener(function(context) {
  context_id = context.contextID;
});

chrome.input.ime.onKeyEvent.addListener(
  function(engineID, keyData) {
    if (keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) {
      chrome.input.ime.commitText({"contextID": context_id,
                                   "text": keyData.key.toUpperCase()});
      return true;
    } else {
      return false;
    }
  });
