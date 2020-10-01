let bubble= document.getElementById("bubble");
let pop= document.getElementById("pop");

bubble.addEventListener("click",()=>{
  pop.play();
  setTimeout(()=>{
    window.close();
  },100);
  console.log("close!")
})
