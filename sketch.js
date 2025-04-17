// Outlaw Adventure
// Faith Walker
// mm/dd/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let outlaw;
let backDrop;
let backDrop2;
let xSpot = 50;
let ySpot;
let screen = "start";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload(){
  outlaw = loadImage("sprite_05.png");
  backDrop2 = loadImage("instructions-backdrop.jpg");
  backDrop = loadImage("desert.png");

}

function draw() {
  background(backDrop2);
  // want to rotate through background based on time of day/area?

  changeScreenIfNeeded();
  console.log(screen);
}

function changeScreenIfNeeded(){
  if (screen === "start"){
    // display start screen
    if (key === "i"){
      screen = "instructions";
    }
  }
  if (screen === "instructions"){
    // display instructions
  }
  if (screen === "play"){
    // displays game
    displayEnvironment();
    displayPlayer();
  }
}

function displayEnvironment(){
  fill("#33221c");
  rect(0, 550, width, 300);
}

function displayPlayer(){
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
    // I want the movement to be smoother, so if i hold down it moves 
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
  if (key === "i"){
    screen = "instructions";
  }
}


// when an object appears, if the distance is around 50-25 pixels, trigger a text function thing most likely will be asking a question