var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;

var door;

var harry,harryImg;

var door,doorImg;

function preload(){
  harryImg = loadImage("images/harrypotter.png");
  doorImg = loadImage("images/door.png");
}

function setup()
{
  createCanvas(800,600);

  block1 = createSprite(300,420,10,55);
  block2 = createSprite(500,420,10,55);
  block3 = createSprite(149,425,295,10);
  block4 = createSprite(650,425,295,10);
  block5 = createSprite(300,595,10,75);
  block6 = createSprite(500,595,10,75);
  block7 = createSprite(300,400,10,75);
  block8 = createSprite(500,400,10,75);
  block9 = createSprite(300,230,10,55);
  block10 = createSprite(500,230,10,55);
  block11 = createSprite(149,210,295,10);
  block12 = createSprite(650,210,295,10);

  harry = createSprite(400,570,10,10);
  harry.addImage("harry",harryImg);
  harry.scale = 0.2;

  door = createSprite(35,35,20,40);
  door.addImage("door",doorImg);
  door.scale = 0.5;
}

function draw()
{
  background("cyan");
  
  // textFont("Algerian");
  // textSize(15);
  // text("Welcome",170,100);
  // text("you have 5 lives to complete 2 tasks",60,150);
  // text("Good luck.",170,200);

  // if (keyDown("UP_ARROW")) {
  //   harry.velocityX = 0;
  //   harry.velocityY = -4;
  // }
  
  // if (keyDown("DOWN_ARROW")) {
  //   harry.velocityX = 0;
  //   harry.velocityY = 4;
  // }
  // if (keyDown("LEFT_ARROW")) {
  //   harry.velocityX = -4;
  //   harry.velocityY = 0;
  // } 
 
  // if (keyDown("RIGHT_ARROW")) {
  //   harry.velocityX = 4;
  //   harry.velocityY = 0;
  // }
  

  if(keyDown("RIGHT")){
    harry.x= harry.x + 6;
  }
  
  if(keyDown("UP")){
    harry.y= harry.y - 6;
  }
  
  if(keyDown("DOWN")){
    harry.y= harry.y + 6;
  }
  
  if(keyDown("LEFT")){
    harry.x= harry.x - 6;
  }
  
  
  drawSprites();
  createEdgeSpritees();
   
  harry.bounceOff(block1);
  harry.bounceOff(block2);
  harry.bounceOff(block3);
  harry.bounceOff(block4);
  harry.bounceOff(block5);
  harry.bounceOff(block6);
  harry.bounceOff(block7);
  harry.bounceOff(block8);
  harry.bounceOff(block9);
  harry.bounceOff(block10);
  harry.bounceOff(block11);
  harry.bounceOff(block12);

  // harry.bounceOff(Edge);

}