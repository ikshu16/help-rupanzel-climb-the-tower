var START=  2
var PLAY = 1
var END = 0
var gameState = START

var score, lives

var tower
var rupanzel
var creepers
var coin

var sad



function preload(){

  towerImg = loadImage("tower.png");
  rupanzelImg = loadImage("RUPANZELE.png")
  creepersImg = loadImage("creeper.png")
  sadImg = loadImage("sad.png")
  coinImg = loadImage("Gold_coin.png")
}

function setup() {
 createCanvas(600, 400)
  
  tower = createSprite(300, 200)
   tower.addImage("tower", towerImg);
  tower.velocityY= 3
  
  
  rupanzel= createSprite(300, 290, 20, 20);
  rupanzel.addImage(rupanzelImg);
  rupanzel.scale = 0.4;
  
  sad = createSprite(300, 200, 10, 10);
  sad. addImage(sadImg);
  sad.Scale = 0.1;
  

  
  rupanzel.setCollider("rectangle",0,0,150,350)
  //rupanzel.debug = true;

  creeperGroup = new Group ();
  coinGroup = new Group();
  
  score = 0
  lives = 3
}

function draw() {
 background(0);
   text("Score: "+ score, 300,50);
  
  if(gameState === START){
    background("pink")
    
    tower.visible = false;
    rupanzel.visible = false;
    creeperGroup.setVelocityEach(0);
    sad.visible = false;
    coinGroup.setVelocityEach(0)
    coinGroup.visible = false;
    
    score = 0
    
    textSize(20);
    text("Help Rupanzel climb the tower!", 200, 50)
    
    text("Rupanzel wants to climb the tower,", 70, 90)
    text("but she always crashes with the creeper plants", 70,115)
    text("help her climb the tower safely", 70, 140)
    
    textSize(23);
    text("INSTRUCTIONS", 70, 230)
    
    textSize(18);
    text("press S to start the game.", 70, 250)
    text("use arrow keys to move Rupanzel", 70, 270)
    text("collect all coins you see", 70, 290)
    text("don't hit the creepers", 70, 310)
    
    text("you only have three lives", 70, 330)
    
    textSize(25);
    text("ALL THE BEST!", 300, 360)
    
    
    
    if(keyDown("S")){
      
      gameState = PLAY
    }
  }
  
  if(gameState === PLAY){
   
    
    if(frameCount%50 === 0){
      
      text("Score: "+ score, 300,50);
    
      score = score+1
    }
     tower.visible = true;
    rupanzel.visible = true;
    
    if(rupanzel.isTouching(coinGroup)){
      
      coinGroup.destroyEach()
    }
    
      if(tower.y> 400){
    tower.y=300
  }
  
  if(keyDown("right")){
    
    rupanzel.x = rupanzel.x+5
  }
  
  if(keyDown("left")){
    
    
    rupanzel.x = rupanzel.x-5
  }
    
    sad.visible = false;
  
    if(lives === 0){
      
      gameState = END
    }
    
   
      if(rupanzel.isTouching(creeperGroup))
    {
      lives=lives-1;
      creeperGroup.destroyEach();
     
    }
    }
  
  if(gameState===END){
    
    
    background("purple")
    tower.visible = false;
    
    creeperGroup.setVelocityEach(0);
    creeperGroup.destroyEach();
    
    rupanzel.visible = false;
    
    sad.visible = true;
    
   coinGroup.setVelocityEach(0) 
    
    
    textSize(30);
    text("GAME OVER", 300, 390);
  }
  spawnCoin();
spawnCreepers();
  drawSprites();



  }
  
function spawnCreepers(){
  
  if(frameCount% 120===0){
    var creepers = createSprite(100, 0, 1, 1)
    creepers.addImage(creepersImg);
    
    creepers.scale = 0.05    
    creepers.velocityY = 3
    creepers.lifetime = 130;
    creepers.x = Math.round(random(90,560))
    
    
    creeperGroup.add(creepers)
    
  }
}

function spawnCoin(){
  if(frameCount% 150===0){
    var coin = createSprite(120, 0, 1, 1)
    coin.addImage(coinImg);
    
    coin.scale = 0.05    
    coin.velocityY = 3
    coin.lifetime = 500;
    coin.x = Math.round(random(90,560))
    
    
    coinGroup.add(coin)
    
}
}