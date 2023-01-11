let gif;
function preload(){
  gif = loadImage('assets/wand3.gif');
}

function setup() {//runs once
  createCanvas(windowWidth, windowWidth);
  fill('white');
}

function draw() {//runs in a loop

var num = 4; //variable for the number of squares in the y direction

var sideLen = windowWidth/num; //variable for the side length of each square

  for(var y = 0; y < windowWidth; y = y + sideLen){
  for(var x = 0; x < windowWidth; x = x + sideLen) { //loop to create a row of squares in the x direction

  image(gif, x, y, windowWidth/num, windowWidth/num);
  }
  }


}
