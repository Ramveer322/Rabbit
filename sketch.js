var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangeImg = loadImage("orangeleaf.png")
  appleImg = loadImage("apple.png")
  grassImg = loadImage("grass.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x=World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprites = Math.round(random(1,3)); 

  if (frameCount % 80 == 0) { 

    if (select_sprites == 1) { 
      createapples(); } 
      else if (select_sprites == 2) 
      { createorange(); }
      else { createRed(); 
      } }

}

function createorange(){
  orange=createSprite(random(50,350,40,10,10))
  orange.addImage(orangeImg)
  orange.scale=0.07
  orange.velocityY=3
  orange.lifetime=150

}

function createapples(){
  apples=createSprite(random(50,350,40,10,10))
  apples.addImage(appleImg)
  apples.scale=0.07
  apples.velocityY=3
  apples.lifetime=150

}

function createRed(){
  red=createSprite(random(50,350,40,10,10))
  red.addImage(grassImg)
  red.scale=0.07
  red.velocityY=3
  red.lifetime=150

}
