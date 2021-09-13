var bg,bgimg;
var iss,issimg;
var spacecraft,spacecraftimg,spaceup,spacedown,spaceleft,spaceright;
var hasDocked = false; 
var abc;
var required;

function preload(){
 bgimg = loadImage("images/spacebg.jpg");
 issimg = loadImage("images/iss.png");
 spacecraftimg = loadAnimation("images/spacecraft1.png");
 spaceup = loadAnimation("images/spacecraft2.png","images/spacecraft2.png");
 spaceleft = loadAnimation("images/spacecraft4.png","images/spacecraft4.png");
 spaceright = loadAnimation("images/spacecraft3.png","images/spacecraft3.png");
 spacedown = loadAnimation("images/spacecraft1.png");
 required = loadAnimation("images/1.jpg");
}

function setup() {
  createCanvas(1535,775);

  spacecraft=createSprite(700,720,50,50);
  spacecraft.addAnimation("space",spacecraftimg);
  spacecraft.scale=0.25;

  iss=createSprite(650, 200, 650, 650);
  iss.addImage("issimg",issimg);
  iss.scale=0.75;
  iss.depth+=3;

  abc=createSprite(600,220,10,10);
  abc.visible=false;
  abc.setCollider("rectangle",0,0,10,10);
  abc.debug=false;

  
}

function draw() {
  background(bgimg);  
  drawSprites();

  if(!hasDocked){  
    if(keyDown(UP_ARROW)){
      spacecraft.y -= 2;
      spacecraft.addAnimation("spaceup",spaceup);
      spacecraft.changeAnimation("spaceup");
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.y += 2;
      spacecraft.addAnimation("spacedwn",spacedown);
      spacecraft.changeAnimation("spacedwn");
    }

    if(keyDown(LEFT_ARROW)){
      spacecraft.x -= 2;
      spacecraft.addAnimation("spaceleft",spaceleft);
      spacecraft.changeAnimation("spaceleft");
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.x += 2;
      spacecraft.addAnimation("spaceright",spaceright);
      spacecraft.changeAnimation("spaceright");
    }
  }

  if(spacecraft.isTouching(abc)){
    hasDocked=true;
    fill("#B1E2EF");
    textSize(60);
        text("Docking Successfull!",500,380);
    console.log("DOCKING SUCCESSFULL");
  }
}