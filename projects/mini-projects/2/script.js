let button = document.getElementById("button");
let pop= document.getElementById("pop");
pop.loop = false;

let sw = screen.width;
let sh = screen.height;

function openWindow(){
  // console.log("Hey");
  let x=Math.random()*(sw-200);
  let y=Math.random()*(sh-200);
  let randomRadius = 100+Math.random()*200;
  let newWindow = window.open("hello/index.html","",
    "width="+randomRadius+",height="+randomRadius+",left="+x+",top="+y);
  console.log(randomRadius);
  newWindow.addEventListener("load", ()=>{

  let interval = setInterval(()=>{
    let ran = Math.random();
    if(ran<0.25){
      ranR = Math.random()*40;
      x+=ranR;
    }else if (ran<0.5){
      ranL = Math.random()*40;
      x-=ranL;
    }else{
      y-=5;
    }
    if (y>0){
      newWindow.moveTo(x,y);
    }else{
      pop.play();
      setTimeout(()=>{
        pop.pause();
        clearInterval(interval);
        newWindow.close();
      },100);
    }
  },100)
})
}

function openManyWindows(){
  let n = 1+Math.random()*5;
  for(let i=0;i<n;i++){
    openWindow();
  }
}

button.addEventListener("click",openManyWindows);
