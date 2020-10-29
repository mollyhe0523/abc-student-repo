

// let time = document.getElementById("time");
// let text = document.getElementById("text");
let button=document.getElementById("button");


button.addEventListener("click",()=>{
  console.log("popup");
  // text.style.visibility="visible";
  chrome.tabs.query({active:true, currentWindow:true},function(tabs){
  chrome.tabs.sendMessage(tabs[0].id,{msg:"It's me."});
  })

  // chrome.runtime.sendMessage({type:"thisTime"}, function(response){
  //   console.log("response is", response);
  //   currentValue = response.value;
  //   time.innerHTML=currentValue;
  //
  // });
})
