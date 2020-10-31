var tower,towerimg;
var door,doorimg,doorsgroup;
var climber,climberimg,climbergroup;
var ghost,ghostimg;
var invisibleblock,invisiblegroup;
var gamestate="play";
var spookysound;
function preload() {
towerimg=loadImage("tower.png");
  doorimg=loadImage("door.png");
  climberimg=loadImage("climber.png");
  ghostimg=loadImage("ghost-standing.png");
  spookysound=loadSound("spooky.wav");
}

function setup(){ 
  createCanvas(600,600)
tower=createSprite(300,300);
tower.addImage(towerimg);
tower.velocityY=1;
  doorsgroup= new Group();
climbergroup=new Group();
  ghost=createSprite(200,400,15,15);
ghost.addImage(ghostimg);
  ghost.scale=0.5;
  invisiblegroup=new Group();
  spookysound.loop();
}
function draw() {
  background("white");
  if(gamestate==="play"){
  if(tower.y>400){
    tower.y=300;
    
  }
  if(keyDown("space")){
    ghost.velocityY=-2;
    
    
  }
  ghost.velocityY=ghost.velocityY+0.5;
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+5;

    
  }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-5;
    
  }
  if(climbergroup.isTouching(ghost)){
    
    ghost.velocityY=0;
  }
  if(invisiblegroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy()
    gamestate="end";
    
    
    
  }
  Spawndoors();
    drawSprites();
  }
  if(gamestate==="end"){
    stroke("green");
    fill("blue");
    textSize(25);
    text("Game over",300,300);
    
    
    
  }
  
}
function Spawndoors() {
  if(frameCount%250===0){
  door=createSprite(200,-50);
    door.addImage(doorimg);
  door.x=Math.round(random(100,400));
    door.velocityY=1;
    door.lifetime=600;
    doorsgroup.add(door);
    climber=createSprite(door.x,10);
    climber.addImage(climberimg);
    climber.velocityY=1;
    climber.lifetime=600;
    climbergroup.add(climber);
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    invisibleblock=createSprite(climber.x,15,climber.width,2);
invisibleblock.velocityY=1;
invisibleblock.debug=true;
invisiblegroup.add(invisibleblock);
 } 
}