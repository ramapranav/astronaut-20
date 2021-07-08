
var astronaut,sleep ;

var edges;

function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation('brush.png');
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  bath=loadAnimation("bath1.png","bath2.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  move=loadAnimation("move1.png","move1.png","move.png","move.png");
}
function setup() {
  createCanvas(800,400);
  
 
 
  
  astronaut=createSprite(300,230,10,10);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.5;

}

function draw() {
  background(bg); 

  drawSprites();

  
 


  textSize(20);
  fill("white");
  text("m Key = Moving",30,130);

  
  text("Right Arrow = eating",30,110);

 
  text("Left Arrow = Bathing",30,90);

  textSize(25);
  fill("white");
  text("Instructions :",30,20);

  
  text("Down Arrow = Gymming",30,70);


  textSize(20);
  fill("white");
  text("Up Arrow = Brushing",30,50);

  edges=createEdgeSprites();


  astronaut.bounceOff(edges);

   if(keyDown("m")){
    astronaut.addAnimation("moves",move);
    astronaut.changeAnimation("moves");
    astronaut.velocityX=1;
    astronaut.velocityY=1;
    
  }

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.velocityX=0;
    astronaut.velocityY=0;

  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  
 

  
  
  

}