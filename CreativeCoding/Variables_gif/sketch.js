let gif;
function preload(){
  gif = loadImage('assets/wand3.gif');
}

function setup() {//runs once
  createCanvas(windowWidth, windowWidth);
}

function draw() {//runs in a loop
  //background('white');
  strokeWeight(1);

var num = 20; //variable for the number of squares in the y direction
translate(-150, -150);

var sideLen = windowWidth/num; //variable for the side length of each square

  for(var y = 0; y < windowWidth; y = y + sideLen){
  for(var x = 0; x < windowWidth; x = x + sideLen) { //loop to create a row of squares in the x direction
background('white');
  image(gif, x, y, windowWidth/num, windowWidth/num);
  }
  }


}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
