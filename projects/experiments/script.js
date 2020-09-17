let range=document.getElementById('range');
range.addEventListener("input",giveValue);

let value=document.getElementById('value');

function giveValue(){
  // Mind to add px at the end to make it work
  value.style.marginLeft=range.value+"px";
  value.innerHTML=range.value;
}
