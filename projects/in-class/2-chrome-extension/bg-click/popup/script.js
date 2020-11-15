let button=document.getElementById("button");
let valueDisplay=document.getElementById("currentValue");

let currentValue = 0;

chrome.runtime.sendMessage({type:"getCurrentValue"}, function(response){
  console.log("response is", response);
  currentValue = response.value;
  valueDisplay.innerHTML=currentValue;

});


button.addEventListener("click",()=>{
  currentValue++;
  valueDisplay.innerHTML=currentValue;

  chrome.runtime.sendMessage({type:"increaseValue"})
})
