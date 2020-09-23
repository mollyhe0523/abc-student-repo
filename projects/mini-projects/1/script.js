
let range = document.getElementById("range1");
range.addEventListener("input",()=>{
  let value = range.value;
  let width = window.innerWidth;
  let height = window.innerHeight;
  console.log(width,height);
  window.scrollTo(width-width/100*value,2*(height/100*value));
});


let range2 = document.getElementById("range2");
let small = document.getElementById("small")
range2.addEventListener("input",()=>{
  let value = range2.value;
  let width = window.innerWidth;
  let height = window.innerHeight;
  // small.style.top=width/100*value+"px";
  small.style.left=2*(height/100*value)+"px";
  range2.style.transform="rotate(-"+value+"deg)";
})

let range3 = document.getElementById("range3");
range3.addEventListener("input",()=>{
  let value = range3.value;
  let width = window.innerWidth;
  let height = window.innerHeight;
  small.style.top=width/100*value+"px";
  // small.style.left=2*(height/100*value)+"px";
  range3.style.transform="rotate("+value+"deg)";
})
