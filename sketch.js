// Outlaw Adventure
// Faith Walker
// mm/dd/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let name;
let outlaw;
let backDrop;
let backDrop3;
let backDrop2;
let myFont;
let xSpot = 50;
let ySpot;
let screen = "start";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload(){
  myFont = loadFont("Ewert-Regular.ttf");
  outlaw = loadImage("sprite_05.png");
  backDrop2 = loadImage("instructions-backdrop.jpg");
  backDrop3 = loadImage("desert.png");
  backDrop = loadImage("start-screen.webp");

}



function draw() {
  // want to rotate through background based on time of day/area?
  changeScreenIfNeeded();
  console.log(screen);
}

function changeScreenIfNeeded(){
  if (screen === "start"){
    // display start screen
    background(backDrop);
  }
  if (screen === "instructions"){
    // display instructions
    background(backDrop2);
    displayInstructions();
  }
  if (screen === "intro"){
    background(backDrop2);
    displayIntro();
  }
  if (screen === "play"){
    // displays game
    background(backDrop3);
    displayEnvironment();
    displayPlayer();
  }
}

function displayInstructions(){
  fill("white");
  textSize(36);
  textAlign(CENTER);
  textFont(myFont);
  text("HOW TO PLAY", width/2, 100);

  textSize(24);
  text("MOVEMENT/CONTROLS", width/4, 200);
  text("GOAL", width/4 *3, 200);

  textSize(20);
  text("Use 'a' & 'd' keys to move forward and backward", width/4, 300);
  text("Spacebar to jump", width/4, 350);
  text("Use 'w' & 's' keys to pick up and drop items", width/4, 400);
  text("There will be frequent pop-ups with text or questions", width/4, 450);
  text("y = yes n = no, arrow keys will cue text to continue", width/4, 500);
  text("You are an outlaw in the wildwest", width/4 * 3, 300);
  text("Your goal is to travel across the desert", width/4 * 3, 350);
  text("And uncover local mysteries", width/4 * 3, 400);
  text("Speak to town locals and avoid sheriffs and officals", width/4 * 3, 450);
  text("Collect bounties and save damsels", width/4 * 3, 500);
}

function displayIntro(){
  fill("white");
  textSize(36);
  textAlign(CENTER);
  textFont(myFont);
  text("WELCOME TO THE WILD WEST", width/2, height/2);

  // move onto each piece of text when forward arrow is pressed (find a way to do this wihtout using clear function)
  text("PLEASE ENTER YOUR NAME", width/2, height/2);
  name = prompt("What is your name?");
  text("You are " + name + " an outlaw notorious for evading the law", width/2, height/2);
  text("You move around from town to town across the desert, never tied down", width/2, height/2);
  text("You are a lone wolf and hate having people tag along on your journey", width/2, height/2);
  text("Many of the folks you've encountered don't have fond memories of you", width/2, height/2);
  text("Yet you'll always get the job done", width/2, height/2);
  text("Your main motivation has always been money", width/2, height/2);
  text("And you've frequently worked as a bounty hunter", width/2, height/2);
  text("This is a journey of self discovery", width/2, height/2);
  text("As you discover how truly wonderful the world and humanity can be", width/2, height/2);
  text("The people you meet can change your cynical attitude, if you allow them", width/2, height/2);

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
  if (keyCode === 13){
    screen = "intro";
  }
  if (keyCode === 39){
    // change the text
  }
}


// when an object appears, if the distance is around 50-25 pixels, trigger a text function thing most likely will be asking a question