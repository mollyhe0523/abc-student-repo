// let wheat1 = document.getElementById("wheat1");
//
// wheat1.addEventListener("mouseover",()=>{
//   wheat1.style.animation = "skew 2s linear";
//   console.log("start");
// })
// wheat1.addEventListener("mouseout",()=>{
//   setTimeout(()=>{
//     wheat1.style.animation = "none";
//     console.log("stop");
//   },2000)
// })
// alert("1");
let pop= document.getElementById("pop");
pop.loop = false;

let wheat = document.getElementsByClassName("wheat");
for (let i=0;i<wheat.length;i++){
  // wheat[i].index = i;
  wheat[i].addEventListener("mouseover",()=>{
    console.log("yo");
    wheat[i].style.animation = "skew 1s linear";
    pop.play();
  });
  wheat[i].addEventListener("mouseout",()=>{
    setTimeout(()=>{
      pop.pause();
      wheat[i].style.animation = "none";
      console.log("stop");
    },2000)
    });
}
