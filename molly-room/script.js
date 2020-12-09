// let array=[];
let container=document.getElementById('container');
let boxes = container.getElementsByClassName("box");
let stop = document.getElementById('stop');
setBoxes();

window.addEventListener("resize", setBoxes);
function setBoxes(){
  setTimeout(()=>{
    let elements = document.getElementsByClassName("newBox");
    if (elements){
      while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
          // console.log("delete")
      }
    }
    xNum = Math.ceil(window.innerWidth/150)-1;
    yNum = Math.ceil(window.innerHeight/150)-1;
    // console.log(xNum,yNum);
    boxNum = xNum * yNum - 11;
    for(let i=0;i<boxNum;i++){
      let newDiv=document.createElement("div");
      newDiv.className="newBox box";
      container.appendChild(newDiv);
    }

    boxes = container.getElementsByClassName("box");
  },100);

}
let state = "go";

let run = setInterval(()=>{
  let lastBox = boxes[boxes.length-1];
  container.removeChild(lastBox);
  container.prepend(lastBox)
},400);

stop.addEventListener('click',()=>{
  if (state == "go"){
    clearInterval(run);
    state = "stop";
    console.log("stop")
  }
})

go.addEventListener('click',()=>{
  if (state == "stop"){
    run = setInterval(()=>{
      let lastBox = boxes[boxes.length-1];
      container.removeChild(lastBox);
      container.prepend(lastBox)
    },400);
    state = "go"
    console.log("go")
  }
})

let pjA=document.getElementById("pjA");
pjA.addEventListener("mouseover",()=>{
  pjA.src="img/pjA.gif"
  pjA.style.marginTop="70px"
})
pjA.addEventListener("mouseout",()=>{
  pjA.src="img/trans2.gif"
  pjA.style.marginTop="50px"

})

let pjB=document.getElementById("pjB");
pjB.addEventListener("mouseover",()=>{
  pjB.src="img/pjB.gif"
  pjB.style.marginTop="70px"
})
pjB.addEventListener("mouseout",()=>{
  pjB.src="img/trans2.gif"
  pjB.style.marginTop="50px"
})

let pjC=document.getElementById("pjC");
pjC.addEventListener("mouseover",()=>{
  pjC.src="img/pjC.gif"
  pjC.style.marginTop="60px"
})
pjC.addEventListener("mouseout",()=>{
  pjC.src="img/trans2.gif"
  pjC.style.marginTop="50px"
})

let mini1=document.getElementById("mini1");
mini1.addEventListener("mouseover",()=>{
  mini1.src="img/mini1.webp"
})
mini1.addEventListener("mouseout",()=>{
  mini1.src="img/trans2.gif"
})

let mini2=document.getElementById("mini2");
mini2.addEventListener("mouseover",()=>{
  mini2.src="img/mini2.jpg"
})
mini2.addEventListener("mouseout",()=>{
  mini2.src="img/trans2.gif"
})

let mini3=document.getElementById("mini3");
mini3.addEventListener("mouseover",()=>{
  mini3.src="img/mini3.jpg"
})
mini3.addEventListener("mouseout",()=>{
  mini3.src="img/trans2.gif"
})

let mini4=document.getElementById("mini4");
mini4.addEventListener("mouseover",()=>{
  mini4.src="img/mini4.jpg"
})
mini4.addEventListener("mouseout",()=>{
  mini4.src="img/trans2.gif"
})

let mini5=document.getElementById("mini5");
mini5.addEventListener("mouseover",()=>{
  mini5.src="img/mini5.jpg"
})
mini5.addEventListener("mouseout",()=>{
  mini5.src="img/trans2.gif"
})

let mini6=document.getElementById("mini6");
mini6.addEventListener("mouseover",()=>{
  mini6.src="img/mini6.jpg"
})
mini6.addEventListener("mouseout",()=>{
  mini6.src="img/trans2.gif"
})

let mini7=document.getElementById("mini7");
mini7.addEventListener("mouseover",()=>{
  mini7.src="img/mini7.jpg"
})
mini7.addEventListener("mouseout",()=>{
  mini7.src="img/trans2.gif"
})

let girlBox=document.getElementById("girlBox");
let girl=document.getElementById("girl");
let text=document.getElementById("text");
girlBox.addEventListener("mouseover",()=>{
  girl.src=""
  text.innerHTML = "Wanna know about me?"
})
girlBox.addEventListener("mouseout",()=>{
  girl.src="img/1.gif"
  text.innerHTML = ""
})
