let button = document.getElementById("button");
console.log(button);

let sw = screen.width;
let sh = screen.height;

function openWindow(){
  console.log("Hey");
  let randomX=Math.random()*(sw-200);
  let randomY=Math.random()*(sh-200);
  let newWindow = window.open("hello/index.html","","toolbar=1, titlebar=1, width=400,height=400,\
    left="+randomX+",top="+randomY);

  let randomTime=5000+Math.random()*4000;
  setTimeout(function(){
    newWindow.close();
  },randomTime);
}

function openManyWindows(){
  for(let i=0;i<5;i++){
    openWindow();
  }
}


button.addEventListener("click",openManyWindows);
