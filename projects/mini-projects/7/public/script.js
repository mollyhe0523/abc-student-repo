console.log("hi");

let socket = io();
let namebox = document.getElementById('name');
let full = document.getElementById('full');
let num = document.getElementById('num');
let img = document.getElementById('img');
let audio = document.getElementById('audio');
let myCount = 0;

socket.on("count",(number)=>{
  console.log("received count:",number)
  num.innerHTML=number;
  myCount = number;
})
socket.on("full",()=>{
  console.log("full");
  if (myCount >5){
    console.log("You are out");
    full.innerHTML = "The seats are full now. Plz wait for a while.<br> Refresh constantly to check whether there is a vacant seat for you~"
  }else{
    setTimeout(yo,2000);
  }
})

function yo(){
  full.innerHTML = "All crew aboard. Let's fly!<br>(Turn up the audio to hear the launch!)"
  img.style.backgroundImage="url(sky.gif)";
  audio.play();
}
