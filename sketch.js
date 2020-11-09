
var monkey , monkeyImage
var backgroung,backgroungImage;
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var ground;

function preload(){
  
  
  monkeyImage =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroungimage = loadImage("jungle.jpg");
  
 
}



function setup() 
{
  createCanvas(600, 400);
  
  backgroung = createSprite(400,100,100,100);
   backgroung.addImage(backgroungimage);
   backgroung.x=backgroung.width/2;
  backgroung.velocityX=-4;
  
  
  monkey = createSprite(120, 315, 20, 20);
  monkey.addAnimation("running", monkeyImage);
  monkey.scale = 0.1
 
  ground = createSprite(300, 370, 600, 60);
  ground.shapeColor = "lightgreen"
  ground.visible = false;
 
  
  
  bananaGroup = createGroup()
  obstacleGroup = createGroup()
}


function draw() 
{
  background(180);
  
  
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(backgroung.x<100){
    backgroung.x=backgroung.width/2;
  }
  
  
  
  
  
  
  
  
  
  text("Survival Time = " + score, 300, 50)
  
  monkey.collide(ground)
  
  if (keyDown("touches") && monkey.y >= 309.2)
    {
      monkey.velocityY = -20;
    }
      monkey.velocityY = monkey.velocityY + 0.9;
  
  if (monkey.isTouching(bananaGroup))
    {
      banana.destroy()
      score = score + 2;
      
    }
  
  if (monkey.isTouching(obstacleGroup))
    {
      background(0);
      monkey.velocityX = 0;
      monkey.visible = false
      banana.velocityX = 0;
      banana.visible = false
      obstacle.velocityX = 0;
      obstacle.visible = false
      ground.visible = false;
      backgroung.visible = false;
      
      textSize(20)
      text("GAME OVER", 350, 200)
      
      if(bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
     
     }
    switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
    }

 
  spawnBananas()
  spawnObstacle()
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}


function spawnObstacle()
{
  if (frameCount % 125 === 0)
    {
  obstacle = createSprite(600, 315, 20, 10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -8;
  obstacleGroup.add(obstacle)
    }
}

function spawnBananas()
{
  if (frameCount % 125 === 0)
    { 
  banana = createSprite(600, 98, 50, 50);
  banana.velocityX = -7;
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  bananaGroup.add(banana)
    }
}