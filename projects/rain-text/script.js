let range = document.getElementById("myRange");
let content = document.getElementById("content");

// Get each char in the string text, seperat them by spam, and put it back on HTML.
// The purpose of spam is to help manipulate each char as follows.
let text = content.innerHTML;
let letters = text.split("");
let letterSpans = letters.map((letter)=>{ //no need to write "function" anymore! and this is an anonymous function
  return "<span>"+letter+"</span>"
});
content.innerHTML=letterSpans.join("");


// Get each span tag, map it with a random num(so that within each refresh the
// num would stay the same. Mind that the "spanTags" isn't an array, so create
// an array from it)
let spanTags=document.getElementsByTagName("span");

spanArray=Array.from(spanTags);
randomNums=spanArray.map((spanTag)=>{
  return spanTag.num=Math.random()*5
})


// Multiply the value and the random num and apply it to each span tag
range.addEventListener("input",()=>{
  let value = range.value;
  for (let i = 0; i<spanTags.length; i++){
    spanTags[i].style.top=value * randomNums[i]+"px";
  }
})
