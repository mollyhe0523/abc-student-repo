console.log("hello");

let currentValue = 0;

chrome.storage.local.get(['counterValue'], function(result){
  console.log('Value in storage is' + result.counterValue);
  if (result.counterValue == undefined){
    currentValue = 0;

    chrome.storage.local.set({counterValue: currentValue}, function(){
    console.log("Value is set to", currentValue);
    })

  }else{
  currentValue = result.counterValue;
}
})


chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  console.log(message);

  if(message.type == "setTime"){
    // sendResponse({value: message.value});
    currentValue += message.value;
  }

  chrome.storage.local.set({counterValue: currentValue}, function(){
    console.log("Value is set to", currentValue);
  })
})
