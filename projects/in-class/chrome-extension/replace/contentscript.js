console.log("Yo what's up");

function replace(word1,word2){
  let regEx = new RegExp(word1,"g");
  document.body.innerHTML = document.body.innerHTML.replace(regEx,word2);
}


function gotMessage(request,sender,sendResponse){
  console.log(request);
  // replace(message.word1,message.word2);
  replace("moon","potato");

}
chrome.runtime.onMessage.addListener(gotMessage);
