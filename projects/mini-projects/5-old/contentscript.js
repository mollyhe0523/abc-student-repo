console.log("Yo what's up");

let findLib = ["most","first","top","champion","only","last","latest","newest","national","world","global","universe","famous","leader","leading","exclusive","special","expert","experts"];
let replaceLib = ["👍","🥇","🥇","👑","☝️","⏮️","🆕","🆕","🇺🇳","🗺️","🗺️","♾️","👍","👍","👍","☝️","☝️","👩‍⚕️","👩‍⚕️"];

function repl(){
  for (let i = 0; i < findLib.length; i++){
    findAndReplaceDOMText(document.body, {
      find: findLib[i],
      replace: replaceLib[i]
    })
  }
}


function gotMessage(request,sender,sendResponse){
  console.log(request);
  repl();
}

chrome.runtime.onMessage.addListener(gotMessage);
