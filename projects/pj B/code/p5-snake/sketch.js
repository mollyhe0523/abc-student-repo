let numSegments = 10;
let direction = 'right';

const xStart = 0; // 蛇的初始 x 坐标
const yStart = 20; //蛇的初始 y 坐标
const diff = 3;

let xCor = [];
let yCor = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(15);
  stroke(255);
  strokeWeight(10);
  for (let i = 0; i < numSegments; i++) {
      xCor.push(xStart + i * diff);
      yCor.push(yStart);
    }
  }

function draw() {
 // clear();
   background(0);
   for (let i = 0; i < numSegments - 1; i++) {
     line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
   }
   updateSnakeCoordinates();
}

function updateSnakeCoordinates() {
  for (let i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case 'right':
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'up':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case 'left':
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'down':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }
}
function keyPressed() {
  // console.log()
  switch (keyCode) {
    case 37:
      if (direction !== 'right') {
        direction = 'left';
        console.log("left");
      }
      break;
    case 39:
      if (direction !== 'left') {
        direction = 'right';
        console.log("right");

      }
      break;
    case 38:
      if (direction !== 'down') {
        direction = 'up';
        console.log("up");
}
      break;
    case 40:
      if (direction !== 'up') {
        direction = 'down';
        console.log("down");
}
      break;
  }
}
