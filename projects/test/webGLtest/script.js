"use strict";

let webcamVideo = document.getElementById("webcamVideo");
let canvas = document.getElementById("canvas");
let snap = document.getElementById("snap");

const constraints = {
  audio: false,
  video: {
    width:640, height:480
  }
};

async function init(){
  try{
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  }
  catch(error){
    console.log(error);
  }
}

function handleSuccess(stream){
  window.stream = stream;
  webcamVideo.srcObject = stream;
}

init();

var context = canvas.getContext("2d");
snap.addEventListener("click",()=>{
  context.drawImage(webcamVideo,0,0,640,480);
  var dataURL = canvas.toDataURL('image/png');
  console.log(dataURL);
  snap.style.visibility="hidden";
  stream.getTracks().forEach(function(track) {
    track.stop();
  });

})
