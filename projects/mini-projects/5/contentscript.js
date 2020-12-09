console.log("Yo what's up");

function repl(){
let myList=["help","Help","me","save","Save","Please","please"]
for (let j=0; j<myList.length; j++){
  findAndReplaceDOMText(document.body, {
    find: myList[j],
    wrap: "span",
    wrapClass: "shiny"
  })
}

let shiny=document.getElementsByClassName('shiny');
for (let i=0; i<shiny.length; i++){
  shiny[i].style.color="red";
  shiny[i].style.fontSize+="80px";
  console.log("going");
}
}

function gotMessage(message,sender,sendResponse){
  console.log(message);
  repl();
  // if (message.type == "thisTime"){
  //   console.log("got thisTime")
  //   sendResponse({value: time});

}

chrome.runtime.onMessage.addListener(gotMessage);

// let time=shiny.length;
  // chrome.runtime.sendMessage({type:"setTime",value:time})
// }









// if (window == top) {
// window.addEventListener('keyup', doKeyPress, false); //add the keyboard handler
// }
//
// trigger_key = 71; // g key
// function doKeyPress(e){
// 	if (e.shiftKey && e.keyCode == trigger_key){ // if e.shiftKey is not provided then script will run at all instances of typing "G"
// 		chrome.extension.sendMessage({redirect: newurl});
// 	}
// }
//
