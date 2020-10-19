let on = document.getElementById("on");
let off = document.getElementById("off");
let frequency = document.getElementById("frequency");
let volume = document.getElementById("volume");

let context = new AudioContext();
console.log(context);

let oscillator = context.createOscillator();
oscillator.type = "triangle";
oscillator.frequency.value = 440;

let gain = context.createGain();

oscillator.connect(gain);
gain.connect(context.destination);

let oscillatorStarted = false;
on.addEventListener("click",()=>{
  if (oscillatorStarted == false){
    oscillator.start(0);
    oscillatorStarted = true;
  }
  gain.gain.value=1;

})

off.addEventListener("click",()=>{
  gain.gain.value=0;
})


// let vw = window.width;
// let vh = window.height;
frequency.addEventListener("input",()=>{
  oscillator.frequency.value = frequency.value;
})
volume.addEventListener("input",()=>{
  gain.gain.value=(volume.value)/100;
})
