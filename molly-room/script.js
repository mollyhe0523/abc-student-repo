let cat = document.getElementsByClassName("cat");
for (var i=0;i<cat.length;i++){
  cat[i].addEventListener("mouseover",()=>{
    document.getElementById("preview").style.opacity="1";
  });
  cat[i].addEventListener("mouseout",()=>{
    document.getElementById("preview").style.opacity="0";
  });
}


let man=document.getElementById("man");
man.addEventListener("mouseover",()=>{
  document.getElementById("preview").src="img/mypage.png"
})
man.addEventListener("mouseout",()=>{
  document.getElementById("preview").src="img/project-preview.jpeg"
})


// The following are some attempts to make the cats and man move
// but unfortunately failed.


// for (i=0;i<11;i++){
//   let addAmount=i*120;
//   let windowWidth=screen.width;
//   if(addAmount>windowWidth){
//      let top=Math.floor(addAmount/windowWidth)*100
//      let left= addAmount%windowWidth
//      document.getElementById("div"+(i+1)).style.left=left+"px";
//      document.getElementById("div"+(i+1)).style.top=top+"px";
//
//   }else{
//     document.getElementById("div"+(i+1)).style.left=addAmount+"px";
//
//   }
//   }


// elem.addEventListener("mouseover",myMove)
// // elem.addEventListener("mouseout",stop)
//
// function myMove() {
//   let id = setInterval(frame, 10);
//   let pos = 0;
//   function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos+=10;
//         console.log(pos)
//         // elem.style.top = pos + 'px';
//         elem.style.left = pos + 'px';
//       }
//     }
//   }
// function stop(){
//   console.log("stop")
//
// }
