// Inspiration:
// Kaleidoscope Snowflake
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/155-kaleidoscope-snowflake.html
// https://youtu.be/R3C2giDfmO8
// https://editor.p5js.org/codingtrain/sketches/JbWCVPX5a
let img;

function preload() {
  img = loadImage('qiu.jpeg');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // background(0);
  image(img, 0, 0,windowWidth,windowHeight);

  // let c = get();
  // image(c, width / 2, 0);

  // translate(width/2,height/2);
  // line(0,255,0,0);
  for(let i =1 ; i<3; i++){
    line(0, i * windowHeight/3, windowWidth, i * windowHeight/3);
    line(i * windowWidth/3, 0, i * windowWidth/3, windowHeight);
  }
}

function 

function draw(){

}
