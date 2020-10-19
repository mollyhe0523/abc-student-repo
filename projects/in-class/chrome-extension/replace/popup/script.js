let button=document.getElementById("button");
button.addEventListener("click",()=>{
  console.log("popup");
  chrome.tabs.query({active:true, currentWindow:true},function(tabs){
    let message{
      "word1":"Moon",
      "word2":"Potato"
    }
    chrome.tabs.sendMessage(tabs[0].id,{msg:"It's me."});
  })
})
