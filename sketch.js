// Outlaw Adventure
// Faith Walker
// mm/dd/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let outlaw;
let backDrop;
let xSpot = 50;
let ySpot;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload(){
  outlaw = loadImage("sprite_05.png");
  backDrop = loadImage("desert.png");
}

function draw() {
  background(backDrop);
  // want to rotate through background based on time of day/area?


  fill("#33221c");
  rect(0, 550, width, 300);
  image(outlaw, xSpot, 350, 200, 200);
}

function keyPressed(){
  if (key === "w"){
  }
  if (key === "a"){
    // walk backwards
    xSpot = xSpot - 25;
  }
  if (key === "s"){
  }
  if (key === "d"){
    // walk forward
    if (xSpot > width){
      xSpot = 0;
    }
    else{
      xSpot = xSpot + 25;
    }
  }
  if (keyCode === 32){
    // jump
  }
}
