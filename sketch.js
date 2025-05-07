// Outlaw Adventure
// Faith Walker
// mm/dd/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// state variables
let screen = "start";
let page = 0;
let question = 'none';

// image variables
let outlaw;
let backDrop;
let backDrop3;
let backDrop2;
let npcName;

// movement/placement variables
let xSpot = 50;
let ySpot;
let npcxSpot;
let npcySpot;

// misc variables
let myFont;
let outlawName;
let y = 0;

// arrays
let introText = ["PLEASE ENTER YOUR NAME", "You are an outlaw notorious for evading the law", "You move around from town to town across the desert, never tied down",
  "You are a lone wolf and hate having people tag along on your journey", "Many of the folks you've encountered don't have fond memories of you", 
  "Yet you'll always get the job done", "Your main motivation has always been money", "And you've frequently worked as a bounty hunter", "This is a journey of self discovery", 
  "As you discover how truly wonderful the world and humanity can be", "The people you meet can change your cynical attitude, if you allow them"]; 


// functions

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload(){
  // fonts
  myFont = loadFont("Ewert-Regular.ttf");

  // characters
  outlaw = loadImage("outlaw.png");
  farmer = loadImage("farmer.png");
  sheriff1 = loadImage("sheriff-no-1.png");
  sheriff2 = loadImage("sheriff-no-2.png");
  cowgirl = loadImage("cowgirl.png");
  nobleLady = loadImage("noble-lady.png");

  // backgrounds
  backDrop2 = loadImage("instructions-backdrop.jpg");
  backDrop3 = loadImage("desert.png");
  backDrop = loadImage("start-screen.webp");

}

function draw() {
  // want to rotate through background based on time of day/area?
  changeScreenIfNeeded();
  console.log(screen);
}

function keyPressed(){

  if (screen === 'start'){
    if (key === "i"){
      screen = "instructions";
    }
    if (keyCode === 13){
      screen = "intro";
      question = 'none';
    }
  }


  if (screen === 'instructions'){
    if (keyCode === 13){
      screen = "intro";
      question = 'none';
    }
  }


  if (screen === 'intro'){
    if (key === 'y'){
      question = 'true';
    }
    if (key === 'n'){
      question = 'false';
    }
    if (keyCode === 39){
      y++;
    }
  }


  if (screen === 'demo'){
    if (key === 'y'){
      question = 'true';
    }
    if (key === 'n'){
      question = 'false';
    }
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
        page++;
        console.log("page is" + page);
      }
      else{
        xSpot = xSpot + 25;
        console.log("page is" + page);
      }
    }
    if (keyCode === 32){
      // jump
    }
  }


  if (screen === 'play'){
    if (key === 'y'){
      question = 'true';
    }
    if (key === 'n'){
      question = 'false';
    }
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
        page++;
        console.log("page is" + page);
      }
      else{
        xSpot = xSpot + 25;
        console.log("page is" + page);
      }
    }
    if (keyCode === 32){
    // jump
    }
  }


  // if (screen === 'end'){}

  // if (key === 'y'){
  //   question = 'true';
  // }
  // if (key === 'n'){
  //   question = 'false';
  // }

  // my shortcut 
  if (key === "f"){
    outlawName = "Faith";
    screen = 'demo';
  }
  if (key === 'b'){
    console.log(question);
  }
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
  if (screen === "demo"){
    background(backDrop3);
    displayEnvironment();
    displayPlayer();
    displayDemo();

    // demoText();
  }
  if (screen === "play"){
    // displays game
    background(backDrop3);
    displayEnvironment();
    displayPlayer();

    if (page === 1){

      npcName = nobleLady;
    }
    // decide which pages the other ones appear on and which pages i change the background on 
    // decide amount of pages that i need
  }
}

function displayEnvironment(){
  fill("#33221c");
  rect(0, 550, width, 300);
}

function displayPlayer(){
  text(outlawName, xSpot + 100, 350);
  image(outlaw, xSpot, 350, 200, 200);
}

function displayNPC(){
  // might need to change the way my npc variables are set up because i think it'll throw an error for the name 
  
  text(npcName, npcxSpot + 100, 350);
  image(npcName, xSpot, 350, 200, 200);
}
  
function talkToNpc(){
  if (dist(xSpot, ySpot, npcxSpot, npcySpot) <= 150){
    text("Would you like to speak to them?", 300, 600);
    if (question === 'true'){
      if (npcName === nobleLady){
        displayNPC();
      }
      else if(npcName === farmer){
        displayNPC();
      }
      else if(npcName === cowgirl){
        displayNPC();
      }
      else if(npcName === sheriff1){
        displayNPC();
      }
      else if(npcName === sheriff2){
        displayNPC();
      }
    }
    else if (question === 'false'){
      // screen = 'play';
    }
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
  text("WELCOME TO THE WILD WEST", width/2, 100);
  if (keyCode === 39 && !outlawName){
    outlawName = prompt("What is your name?");
    alert("Your name is " + outlawName);
    console.log(outlawName);
    text("USE ARROW TO CONTINUE", width/2, 200);
  }
  else{
    text("USE ARROW TO CONTINUE", width/2, 200);
  }

  textSize(20);
  let lineOfText = introText[y];
  text(lineOfText, width/2, height/2);

  if (y > introText.length){
    text("READY TO PLAY?", width/2, 300);
    text("Y/N", width/2, 400);
    if (question === 'true'){
      screen = 'demo';
      question = 'none';
    }
    else if (question === 'false'){
      text("If you aren't ready you can press 'i' to view instructions or enter to see intro again", width/2, 500);
    }
  }
}

function displayDemo(){
  fill("white");
  textSize(20);
  textAlign(CENTER);
  textFont(myFont);

  if (question === 'none'){
    text("Welcome to the wild west " + outlawName + "!", 300, 600);
    text("Would you like to continue with the demo?", 300, 650);
    text("Y/N", 300, 700);
  }
  // text("Welcome to the wild west " + outlawName + "!", 300, 600);
  // text("Would you like to continue with the demo?", 300, 650);
  // text("Y/N", 300, 700);
  if (question === 'true'){
    // question = 'none';
    text("PRESS THE ARROW KEY TO CONTINUE", 300, 600);
    if (keyCode === 39){
      text("Remember to use the 'd' key to move forward", 300, 700);
    }
    if (key === 'd'){
      text("And the 'a' key to go backwards", 300, 700);
    }
    if (key === 'a'){
      text("And the spacebar to jump", 300, 700);
    }
    if (keyCode === 32){
      text("Amazing! To move through the environment just keep walking", 300, 700);
    }
    if (xSpot === width + 200 || xSpot === 0){
      text("Who's that in the distance? Go talk to them.", 300, 600);
      talkToNpc();
    }
  }
  else if (question === 'false'){
    screen = 'play';
    question = 'none';
  }
}


// get rid of all this eventually

// function showStoryLine(){
//   textSize(20);
//   let lineOfText = introText[y];
//   text(lineOfText, width/2, height/2);
// }

// function readyToPlay(){
//   if (y > introText.length){
//     text("READY TO PLAY?", width/2, 300);
//     text("Y/N", width/2, 400);
//     if (key === 'y'){
//       screen = 'demo';
//     }
//     else if (key === 'n'){
//       text("If you aren't ready you can press 'i' to view instructions or enter to see intro again", width/2, 500);
//     }
//   }
// }

// function demoText(){
//   fill("white");
//   textSize(20);
//   textAlign(CENTER);
//   textFont(myFont);
//   text("Welcome to the wild west " + outlawName + "!", 300, 600);
//   text("Would you like to continue with the demo?", 300, 650);
//   text("Y/N", 300, 700);
//   if (key === 'y'){
//     displayDemo();
//   }
//   else if (key === 'n'){
//     screen = 'play';
//   }
//   return;
// }








// when an object appears, if the distance is around 50-25 pixels, trigger a text function thing most likely will be asking a question