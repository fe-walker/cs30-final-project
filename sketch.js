// Outlaw Adventure
// Faith Walker
// 06/13/2025
//

// the code might break, it worked better earlier in the day before i messed with the question system
// also testing.md is meant to be the reflection i mistyped


// state variables
let screen = "start";
let page = 0;
let question = 'none';
let movementDemo = 'off';
let npcDemo = 'off';
let inBar;
let duelOn;
let isShot;
let asking;

// image variables
let outlaw;
let npc;

// backgrounds
let backDrop;
let backDrop3;
let backDrop2;
let townBackDrop;
let barBackDrop;
let backDrop4;
let nightBackDrop;
let backDrop5;
let backDrop6;
let backDrop7;
let backDrop8;
let backDrop9;
let backDrop10;
let backDrop11;
let backDrop12;
let farmBackDrop;
let backDrop13;
let backDrop14;
let backDrop15;
let town2BackDrop;
let town3BackDrop;
let town3BackDrop3;
let town3BackDrop2;
let jailBackDrop;

// movement/placement variables
let xSpot = 50;
let ySpot = 350;
let npcxSpot = 0;
let npcySpot = 350;

// misc variables
let myFont;
let outlawName;
let npcName;
let y = 0;
let s;

// arrays
let introText = ["USE ARROW TO CONTINUE", "You are an outlaw notorious for evading the law", "meet new people as you travel up the missisipi river", "the landscape will change as you head north",
  "and the laws get stricter.", "speak with townsfolk and sheriffs", "meet animal friends", 'and see beautiful sights', "don't worry about a goal", "just play and enjoy the old west"
]; 

let nobleLadyText = ["hello!", "You must be " + outlawName + '!', 'this is the end of the demo, remember to use the arrow keys to continue speaking to NPCs',
  'head into town to begin playing!', 'good luck ' + outlawName + '!'];

let barKeepText = ["Can i get you anything sir?", "I ain't never seen you 'round these parts... you new in town?", 'i see...',
  'be awful careful.. our sheriff aint lousy, and you dont seem very fond of the law', 'i know men like you, travellin round. here for a good time but not a long time am i right?'];

let farmerText = ["who's there?", "what are you doing on my land?", 'i see...', "what's your name kid?", outlawName + " huh? never met anyone with that name..",
  'Need shelter for the night?'];
  // continue in new array based on y/n
let farmerTextY = ["i've got space in my barn if that's suitible to your taste", "my wife will get a nice ol' hay bed ready for ya"];
let farmerTextN = ["alright then. suit yourslef.", "coyotes are real bad 'round here, so be careful when you're leavin'"];

let sheriff1Text = ["You new in town? I ain't never met you before.. and I know this whole town..", "where you headed?", "i see.. i see...", "anything i can do for you?", "no?", "well then.. safe travels, and I better not see you after sunrise or I'm brining you in", "and be careful, other sheriffs ain't as kind as i"];

let cowgirlText = ["I recognize you from somewhere..", "this is my tent, you better stay away if you know whats good for ya", "i'd avoid the next town if i were you..", "later stranger" ];

let sheriff2Text = ["Well, well, well... if it ain't " + outlawName, "i've heard quite a bit about you", "I'd hope you heard about me", "but considering you got the guts to show your face in my town", "either you're a stupid idiot", "or one ballsy fella.",
  "you've got a death wish comin' into my town", "I've got a bounty on your head " + outlawName, "and a big one", "do you even know how much people want for you?"];
let sheriff2TextY = ["then i'm sure you know people are damn desperate for your head", "includin' me.", "i can't risk my reputation by letting you go", "even if you ain't causing no trouble", "so i suggest you kindly co-operate"];
let sheriff2TextN = ["well it's enough for a man to be set for life", "people set bets on who's gonna catch you", "the crown is huntin' you", "and even the damn quebecois are out to get you", "i ain't letting you slip from my grasp", "so, turn yourself in, and maybe i'll spare you."];
let sheriff2TextCoOperate = ["at least you know what's good for ya... ", "now, nice and slowly empty your pockets", "and we'll take you in"];
let sheriff2TextFight = ["stubborn as a mule you are...", "maybe you do have a death wish", "i got men all over this town with orders to shoot", "now you can duel me, and you'll die either way", "but at least you'd have the satisfaction of takin' me out first"];
let duelYText = ["you gonna be a good man and respect the rules of a duel?", "ten paces, and don't even think 'bout runnin'", "my men will get you before you can even blink"];
let duelNText = ["you ain't gonna fight for your life?", "shame..", "well, i'll give you the choice again", "turn yourself in, and you'll have a fair trial"];

let duelInstructions = ["Press the D key once to take your 10 paces", "once you are 10 paces away, quickly press the space bar to shoot"];

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
  barKeep = loadImage("bar-keep.png");

  // backgrounds
  backDrop2 = loadImage("instructions-backdrop.jpg");
  backDrop3 = loadImage("desert.png");
  backDrop = loadImage("start-screen.webp");

  townBackDrop = loadImage("town.png");
  barBackDrop = loadImage("inside-of-bar.png");
  backDrop4 = loadImage("desert-view.png");
  nightBackDrop = loadImage("night one.png");
  backDrop5 = loadImage("daytimedesert.png");
  farmBackDrop = loadImage("farm.png");
  backDrop6 = loadImage("wheatandcow.png");
  backDrop7 = loadImage("passcow.png");
  backDrop8 = loadImage("barn.png");
  backDrop9 = loadImage("night-two.png");
  town2BackDrop = loadImage("sheriff1-town.png");
  backDrop10 = loadImage("start-of-river.png");
  backDrop11 = loadImage("river-and-tent.png");
  town3BackDrop = loadImage("town-sign.png");
  town3BackDrop2 = loadImage("sheriff2-town1.png");
  town3BackDrop3 = loadImage("sheriff2-town2.png");
  jailBackDrop = loadImage("jailcell.png");
  backDrop12 = loadImage("wanted-poster.png");
  backDrop13 = loadImage("end-screen.png");
  backDrop14 = loadImage("river-view.jpg");
  backDrop15 = loadImage("american-west.jpg");
}

function draw() {
  changeScreenIfNeeded();
}

function keyPressed(){
  if (screen === 'start'){
    if (key === "i"){
      screen = "instructions";
    }
    if (keyCode === 13){
      screen = "intro";
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
      asking = false;
      question = 'true';
    }
    if (key === 'n'){
      asking = false;
      question = 'false';
    }
    if (keyCode === 39){
      y++;
    }
  }

  if (screen === 'demo'){
    if (key === 'y'){
      asking = false;
      question = 'true';
    }
    if (key === 'n'){
      asking = false;
      question = 'false';
    }
    if (key === "a"){
      // walk backwards
      xSpot = xSpot - 25;
    }
    if (key === "d"){
      // walk forward
      if (xSpot > width){
        xSpot = 0;
        page++;
      }
      else{
        xSpot = xSpot + 25;
      }
    }
    if (keyCode === 39){
      y++;
    }
  }


  if (screen === 'play'){
    if (key === 'y'){
      asking = false;
      question = 'true';
    }
    if (key === 'n'){
      asking = false;
      question = 'false';
    }
    if (key === "a"){
    // walk backwards
      xSpot = xSpot - 25;
    }
    if (key === "d"){
    // walk forward
      if (xSpot > width){
        xSpot = 0;
        page++;
      }
      else{
        xSpot = xSpot + 25;
      }
    }
    if (keyCode === 39){
      y++;
    }
  }

  // my shortcut 
  if (key === "f"){
    outlawName = "Faith";
    screen = 'play';
    page = 2;

  }
  if (key === "l"){
    outlawName = "Faith";
    screen = 'demo';
    page = 1;

  }
  if (key === 'b'){
    console.log(question);
    console.log(y);
    console.log(outlawName);
    console.log(asking);
  }
}


function changeScreenIfNeeded(){
  if (screen === "start"){
    // display start screen
    background(backDrop);
    displayStartScreen();
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

    if (asking === true){
      resetQuestion();
    }

    if (keyIsDown(65) === true){
      // walk backwards
      xSpot = xSpot - 25;
    }
    if (keyIsDown(68) === true){
      // walk forward
      if (xSpot > width){
        xSpot = 0;
        page++;
      }
      else{
        xSpot = xSpot + 25;
      }
    }

    if (page === 1){
      npcName = "High class lady";
      npc = nobleLady;
    }
  }
  if (screen === "play"){
    // displays game
    // background(backDrop3);
    displayEnvironment();
    displayPlayer();
    
    if (asking === true){
      resetQuestion();
    }

    if (keyIsDown(65) === true){
      // walk backwards
      xSpot = xSpot - 25;
    }
    if (keyIsDown(68) === true){
      // walk forward
      if (xSpot > width){
        xSpot = 0;
        page++;
      }
      else{
        xSpot = xSpot + 25;
      }
    }
    // starts on page 2 with the town 
    pages();
    if (isShot === true){
      screen = 'end';
    }
  }
  if (screen === 'end'){
    background(backDrop13);
    displayEndScreen();
  }
}

function pages(){
  if (page === 1){
    background(backDrop3);
    displayEnvironment();
    displayPlayer();
  }
  if (page === 2){
    background(townBackDrop);
    displayEnvironment();
    displayPlayer();

    if (xSpot > 475 && xSpot < 825){
      fill('white');
      // when the player reaches the bar, ask to go in
      asking = true;
      text('Would you like to enter?', 300, 600);
      text('Y/N', 300, 700);
    }
    if(question === 'true'){
      inBar = true;
    }
    else if (question === 'false'){
      inBar = false;
      background(townBackDrop);
      displayEnvironment();
      displayPlayer();
    }
    if (inBar === true){
      background(barBackDrop);
      displayEnvironment();
      displayPlayer();
      npcName = "Bar Keep";
      npc = barKeep;
      npcxSpot = width/2 + 200;
      displayNPC();
      if (dist(xSpot, ySpot, npcxSpot, npcySpot) < 250){
        asking = false;
      }
      if (xSpot >= 1050){
        fill ('white');
        asking = true;
        text('Would you like to exit?', 300, 600);
        text('Y/N', 300, 700);
      
        if (question === 'true'){
          inBar = false;
        }
      }
    }
    else if (inBar === false){
      background(townBackDrop);
      displayEnvironment();
      displayPlayer();
    }
  }
  if (page === 3){
    background(backDrop4);
    displayEnvironment();
    displayPlayer();
  }
  if (page === 4){
    background(nightBackDrop);
    displayEnvironment();
    displayPlayer();
  }
  if (page === 5){
    background(backDrop5);
    displayEnvironment();
    displayPlayer();

    if (xSpot > 350 && xSpot < 650){
      fill("white");
      asking = true;
      text('Would you like to look at the landscape?', 300, 600);
      text('Y/N', 300, 700);
      
    }
    if (question === 'true'){
      background(backDrop15);
      fill('white');
      text('Use the enter key when ready to continue', 500, 700);
      
    }
    else if (question === 'false'){
      text('What a shame. such a lovely view...', 300, 600);
      
    }
    if (keyCode === 13){
      background(backDrop5);
      displayEnvironment();
      displayPlayer();
    }
  }
  if (page === 6){
    background(farmBackDrop);
    displayEnvironment();
    displayPlayer();
    npcName = "Farmer";
    npc = farmer;
    npcxSpot = width/2 + 200;
    displayNPC();
  }
  if (page === 7){
    background(backDrop6);
    displayEnvironment();
    displayPlayer();
  }
  if (page === 8){
    background(backDrop7);
    displayEnvironment();
    displayPlayer();
  }
  if (page === 9){
    background(backDrop8);
    displayEnvironment();
    displayPlayer();
  }
  if (page === 10){
    background(backDrop9);
    displayEnvironment();
    displayPlayer();
  }
  if (page === 11){
    background(town2BackDrop);
    displayEnvironment();
    displayPlayer();

    npcName = "Sheriff";
    npc = sheriff1;
    displayNPC();
  }
  if (page === 12){
    background(backDrop10);
    displayEnvironment();
    displayPlayer();

    if (xSpot > 150 && xSpot < 350){
      fill("white");
      asking = true;
      text('Would you like to look at the landscape?', 300, 600);
      text('Y/N', 300, 700);
      
    }
    if (question === 'true'){
      background(backDrop14);
      fill('white');
      text('Use the enter key when ready to continue', 500, 700);
    }
    else if (question === 'false'){
      text('What a shame. such a lovely view...', 300, 600);
    }
    if (keyCode === 13){
      question = 'none';
      background(backDrop10);
      displayEnvironment();
      displayPlayer();
    }
  }
  if (page === 13){
    background(backDrop11);
    displayEnvironment();
    displayPlayer();

    npcName = "Cowgirl";
    npc = cowgirl;
    displayNPC();
  }
  if (page === 14){
    background(town3BackDrop);
    displayEnvironment();
    displayPlayer();
  }
  if (page === 15){
    background(town3BackDrop2);
    displayEnvironment();
    displayPlayer();
  }
  if (page === 16){
    background(town3BackDrop3);
    displayEnvironment();
    displayPlayer();

    npcName = "Evil Sheriff";
    npc = sheriff2;
    displayNPC();
  }
  if (page === 17){
    // epic duel starts here
    background(backDrop3);
    displayEnvironment();
    // displayDuel();
    npcxSpot = width/2 + 50;
    xSpot = width/2 - 50;
    displayPlayer();
    npcName = "Evil Sheriff";
    npc = sheriff2;
    displayNPC();
  }
}

function displayDuel(){

}

function displayStartScreen(){
  fill('white');
  rect(width/2 - 250, height/2 - 275, 500, 100);
  textSize(36);
  textAlign(CENTER);
  textFont(myFont);
  fill('brown');
  text('OUTLAW ADVENTURE', width/2 - 5, height/2 - 225);
  fill('white');
  text('PRESS ENTER TO START', width/2 + 5, height/2 + 250);
  text('PRESS i FOR INSTRUCTIONS', width/2 + 5, height/2 + 300);
}

function displayEndScreen(){
  fill('white');
  rect(width/2 - 250, height/2 - 275, 500, 100);
  textSize(36);
  textAlign(CENTER);
  textFont(myFont);
  fill('white');
  text('THE END', width/2 + 5, 250);
  text('Congrats, the reward for your capture has just gotten higher', width/2 + 5, 300);
  text('CTRL-R to replay', width/2 + 5, 350);
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
  text(npcName, npcxSpot + 100, 350);
  if (npc !== undefined) {
    image(npc, npcxSpot, npcySpot, 200, 200);
    talkToNpc();
  }
}
  
function talkToNpc(){
  if (dist(xSpot, ySpot, npcxSpot, npcySpot) <= 250){
    if (question === 'none'){
      fill("white");
      asking = true;
      text("Would you like to speak to them?", 300, 600);
      text("Y/N", 300, 700);
      
    }
    if (question === 'true'){
      if (npc === nobleLady){
        textSize(20);
        let lineOfText = nobleLadyText[y];
        text(lineOfText, width - 1000, 600);
        if (y > nobleLadyText.length - 2){
          text("Walk towards the town", width - 1000, 600);
          npcDemo = 'off';
          screen = 'play';
          y = 0;
        }
      }
      else if (npc === barKeep){
        fill("white");
        textSize(20);
        let lineOfText = barKeepText[y];
        text(lineOfText, 300, 600);
        if (y > barKeepText.length){
          fill("white");
          text("Keep walking to leave the bar", width - 1000, 600);
          y = 0;
        }
      }
      else if(npc === farmer){
        fill('white');
        textSize(20);
        let lineOfText = farmerText[y];
        text(lineOfText, width - 1000, 600);
        if (y > farmerText.length){
          fill("white");
          asking = true;
          text("Y/N", 300, 700);
          if (question === 'true'){
            let lineOfText = farmerTextY[y];
            text(lineOfText, width - 1000, 600);
            if (y > farmerTextY.length){
              fill("white");
              text("Walk past the cow towards the barn", width - 1000, 600);
              y = 0;
            }
          }
          if (question === 'false'){
            let lineOfText = farmerTextN[y];
            text(lineOfText, width - 1000, 600);
            if (y > farmerTextN.length){
              fill("white");
              text("Walk past the cow towards the barn", width - 1000, 600);
              y = 0;
            }
          }
        }
      }
      else if(npc === cowgirl){
        textSize(20);
        let lineOfText = cowgirlText[y];
        text(lineOfText, width - 1000, 600);
        if (y > cowgirlText.length - 2){
          y = 0;
        }
      }
      else if(npc === sheriff1){
        textSize(20);
        let lineOfText = sheriff1Text[y];
        text(lineOfText, width - 1000, 600);
        if (y > sheriff1Text.length){
          y = 0;
        }
      }
      else if(npc === sheriff2){
        textSize(20);
        let lineOfText = sheriff2Text[y];
        text(lineOfText, width - 1000, 600);
        if (y > sheriff2Text.length - 2){
          fill("white");
          asking = true;
          text("Y/N", 300, 700);
          if (question === 'true'){
            let lineOfText = sheriff2TextY[y];
            text(lineOfText, width - 1000, 600);
            if (y > sheriff2TextY.length){
              fill("white");
              asking = true;
              text("Y/N", 300, 700);
              if (question === 'true'){
                let lineOfText = sheriff2TextCoOperate[y];
                text(lineOfText, width - 1000, 600);
                if (y > sheriff2TextCoOperate.length){
                  // would trigger jail cell background
                  y = 0;
                }
              }
              if (question === 'false'){
                let lineOfText = sheriff2TextFight[y];
                text(lineOfText, width - 1000, 600);
                if (y > sheriff2TextFight.length){
                  // would trigger duel scene
                  y = 0;
                }
              }
            }
          }
          if (question === 'false'){
            let lineOfText = farmerTextN[y];
            text(lineOfText, width - 1000, 600);
            if (y > farmerTextN.length){
              fill("white");
              text("Walk past the cow towards the barn", width - 1000, 600);
              y = 0;
            }
          }
        }
      }
    }
    else if (question === 'false'){
      textSize(20);
      text('you may regret this. keep walking i suppose', width - 1000, 600);
    }
  }
}

function displayInstructions(){
  fill("white");
  textSize(36);
  textAlign(CENTER);
  textFont(myFont);
  text("HOW TO PLAY", width/2, 100);
  text("PRESS ENTER TO BEGIN", width/2, 700);

  textSize(24);
  text("MOVEMENT/CONTROLS", width/4, 200);
  text("GOAL", width/4 *3, 200);

  textSize(20);
  text("Use 'a' & 'd' keys to move forward and backward", width/4, 300);
  text("Use the forward arrow to prompt any text to continue", width/4, 400);
  text("There will be frequent pop-ups with text or questions", width/4, 450);
  text("y = yes n = no", width/4, 500);
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
  }

  textSize(20);
  let lineOfText = introText[y];
  text(lineOfText, width/2, height/2);

  if (y > introText.length){
    asking = true;
    text("READY TO PLAY?", width/2, 300);
    text("Y/N", width/2, 400);
    
    if (question === 'true'){
      screen = 'demo';
      y = 0;
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

  if (question === 'none' && page === 0 && npcDemo === 'off' && movementDemo === 'off'){
    text("Welcome to the wild west " + outlawName + "!", 300, 600);
    asking = true;
    text("Would you like to continue with the demo?", 300, 650);
    text("Y/N", 300, 700);
    
  }
  if (question === 'true'){
    if (npcDemo === 'off'){
      text("PRESS THE ARROW KEY TO CONTINUE", 300, 600);
    }
  }
  if (keyCode === 39 && npcDemo === 'off'){
    movementDemo = 'on';
    text("Remember to use the 'd' key to move forward", 300, 700);
  }
  if (key === 'd' && movementDemo === 'on'){
    text("And the 'a' key to go backwards", 300, 700);
  }
  if (key === 'a' && screen === 'demo'){
    text("Amazing! To move through the environment just keep walking", 300, 700);
    movementDemo = 'off';
    npcDemo = 'on';
    npcxSpot = width - 250;
  }
  if (xSpot === width + 200 || xSpot === 0 && page === 1){
    displayNPC();
    text("Who's that in the distance? Go talk to them.", 300, 600);
  }
  else  if (npcDemo === 'on'){
    displayNPC();
  }
  
  else if (question === 'false'){
    screen = 'play';
  }
}

function resetQuestion(){
  question = 'none';
}