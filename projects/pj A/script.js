let button=document.getElementById("submit");
let male=document.getElementById("male");
let female=document.getElementById("female");
let gender = "";

alert("Turn up the audio to hear me!!")
setFade("p1");
setTimeout(()=>{appear("genderS");},1000);
male.addEventListener("change",()=>{
  gender = "UK English Male";
  clearDiv("div1");
  appear("div2");
  speakP2();
  // console.log("man")
})
female.addEventListener("change",()=>{
  gender = "UK English Female";
  clearDiv("div1");
  appear("div2");
  speakP2();
  // console.log("woman")
})

function appear(divTag){
  myDiv=document.getElementById(divTag);
  myDiv.style.visibility="visible";
  myDiv.style.opacity=1;
}
function clearDiv(divTag){
  myDiv=document.getElementById(divTag);
  myDiv.style.visibility="hidden";
  myDiv.style.opacity=0;
}

function setFade(textTag){
  let sentence = document.getElementById(textTag);
  let splited = sentence.innerHTML.split("");
  sentence.innerHTML="";
  for (let i=0; i<splited.length;i++){
    sentence.innerHTML += "<span>"+ splited[i]+ "</span>";
  }
  let char=0;
  let timer=setInterval(onTick,50);
  function onTick(){
    let span= sentence.getElementsByTagName("span")[char];
    span.classList.add('fade');
    char++;
    if (char==splited.length){
      complete();
      return;
    }
  }
  function complete(){
    clearInterval(timer);
    timer= null;
  }
}



//Phase 2: speaking
// div2=document.getElementById('div2')
let name = document.getElementById("randName");
let nameList = ['Alina', ' Ammot', ' Aveline', ' Clarice', ' Colet', ' Dulcia', ' Edilda', ' Elie', ' Elizot', ' Emot', ' Floria', ' Goda', ' Godith', ' Gunnora', ' Houkin', ' Houde', ' Iglesia', ' Ive', ' Justine', ' Lecia', ' Levot', ' Maiot', ' Marcery', ' Marin', ' Martha', ' Millicent', ' Obraya', ' Orenge', ' Osanne', ' Sabine', ' Samia', ' Thomesia', 'Tillot', ' Wymark'];


function speakP2(){
  choose=Math.round(Math.random()*nameList.length);
  name.innerHTML = nameList[choose];
  let p2text = "Hi! You are the first human I’ve met! I’m "+nameList[choose]+", and you?";
  responsiveVoice.speak(p2text, gender);
};

let inputName = document.getElementById("inputName");
button.addEventListener("click",speakText);
function speakText(){
  clearDiv("div2");
  appear("div3");
  let text = document.getElementById('txt').value;
  let name = document.getElementById("randName2");
  inputName.innerHTML=text;
  name.innerHTML=nameList[choose];
  let p3text = "Hi there"+text;
  let p3text2 = "Nice meeting you. BTW, don't worry about my name.";
  let p3text3 = nameList[choose]+"is just some random strange name I've picked just now."
  responsiveVoice.speak(p3text, gender);
  responsiveVoice.speak(p3text2, gender);
  responsiveVoice.speak(p3text3, gender);
  setTimeout(()=>{
    clearDiv("div3");
    appear("div4");
    speakP4();
  },11000);
}

let inputName2 = document.getElementById("inputName2");
function speakP4(){
  search();
  inputName2.innerHTML=inputName.innerHTML;
  let p4text = "Alright Alright "+inputName.innerHTML;
  let p4text2 ="I've just wrote a song only for you. Please listen to it carefully";
  responsiveVoice.speak(p4text, gender);
  responsiveVoice.speak(p4text2, gender);
}
function search(){
  let text = inputName.innerHTML;
  axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCnfmS6e3KJr9--KrtUd5-A2HRvk4OLlqo&type=video&maxResults=1&q="+text+" song")
    .then(function (response) {
      console.log(response);
      let id = response.data.items[0].id.videoId;
      console.log(id);
      video.src="https://www.youtube.com/embed/"+id;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

let more = document.getElementById("more");
more.addEventListener("click",()=>{
  clearDiv("div4");
  appear("div5");
  let p5text="I really want to see your face now. Could you please take a photo of yourself for me?";
  responsiveVoice.speak(p5text, gender);

  "use strict";
  let webcamVideo = document.getElementById("webcamVideo");
  let canvas = document.getElementById("canvas");
  let snap = document.getElementById("snap");
  const constraints = {
    audio: false,
    video: {width:640, height:480}
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
    let photo=document.getElementById("photo");
    let p5text2 = "Oh you look so......organized"
    photo.innerHTML= p5text2;
    responsiveVoice.speak(p5text2, gender);
    let how=document.getElementById("how");
    how.style.visibility="visible";
    how.addEventListener("click",()=>{
      clearDiv("div5");
      appear("div6");
      let p6text = "Because this is how I see you:"
      responsiveVoice.speak(p6text, gender);
      let base64=document.getElementById("base64");
      base64.innerHTML=dataURL;
    })
  })
})
