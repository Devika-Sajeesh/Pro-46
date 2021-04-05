const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var ground1,stand1,stand2;
var slingshot;
var stand3;
var jerry,jerry1,jerryImg,jImg;

var score = 0;

var block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17,block18;
var block19,block20,block21,block22,block23,block24;
var stone;

var bg,tom;

function preload(){
  bg = loadImage("background.jpg");
  jerryImg = loadImage("jerry 1.png")
  jImg = loadImage("jerry.png")
}

function setup() {
  createCanvas(820,400);

  engine = Engine.create();
  world = engine.world;

  jerry = createSprite(200,200,20,20);
  jerry.addImage(jerryImg);
  jerry.scale = 0.1;
  jerry.velocityX = 3;

  jerry1 = createSprite(300,300,20,20);
  jerry1.addImage(jerryImg);
  jerry1.scale = 0.1;
  jerry1.velocityX = 3;
  //jerry.velocityY = 2;

    stone = new Stone(250,250,35,35);
    tom = new Tom(90,300,120,180);
   
    ground1 = new Ground(400,390,870,20);

    stand1 = new Ground(405,265,185,10);
    stand2 = new Ground(700,110,230,10);
    //stand3 = new Ground(100,350,100,10);
    

    block1 = new Cheese(420,235,30,30);
    block2 = new Cheese(360,235,30,30);
    block3 = new Cheese(390,235,30,30);
    block4 = new Cheese(420,235,30,30);
    block5 = new Cheese(450,235,30,30);
    block6 = new Cheese(390,235,30,30);

    block7 = new Cheese(330,235,30,30);
    block8 = new Cheese(360,235,30,30);
    block9 = new Cheese(390,235,30,30);
    block10 = new Cheese(420,235,30,30);
    block11 = new Cheese(450,235,30,30);
    block12 = new Cheese(480,235,30,30);

    block13 = new Cheese(720,100,30,20);
    block14 = new Cheese(660,100,30,20);
    block15 = new Cheese(690,100,30,20);
    block16 = new Cheese(720,100,30,20);
    block17 = new Cheese(750,100,30,20);
    block18 = new Cheese(690,100,30,20);

    block19 = new Cheese(730,100,30,20);
    block20 = new Cheese(760,100,30,20);
    block21 = new Cheese(790,100,30,20);
    block22 = new Cheese(620,100,30,20);
    block23 = new Cheese(650,100,30,20);
    block24 = new Cheese(680,100,30,20);

   

    slingshot = new SlingShot(stone.body,{x:250,y:250});
 
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  //background(0);
  Engine.update(engine);

  background(bg);
  fill("white");
  textSize(20);
  text("Score:"+score,50,40);
  //text("Press space bar to return the pentagon",100,60);
  //textFont("JOKERMAN");
  
  drawSprites();

  
  ground1.display();

  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display(); 
  block6.display(); 

  block7.display(); 
  block8.display(); 
  block9.display(); 
  block10.display(); 
  block11.display(); 
  block12.display();

  block13.display(); 
  block14.display(); 
  block15.display(); 
  block16.display(); 
  block17.display(); 
  block18.display(); 

  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  //block25.display();

  stone.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score(); 
  block6.score(); 

  block7.score(); 
  block8.score(); 
  block9.score(); 
  block10.score(); 
  block11.score(); 
  block12.score();

  block13.score(); 
  block14.score(); 
  block15.score(); 
  block16.score(); 
  block17.score(); 
  block18.score(); 

  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();

  slingshot.display();

  //stand3.display();

  //mouseDragged();
  //mouseReleased();

  tom.display();
 // console.log(frameCount % 80 === 0);

  if(jerry.position.x > 820){
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: jerry.y = 50;
              jerry.x = 10;
      break;

      case 2: jerry.y = 230;
              jerry.x = 10;
      break;

      case 3: jerry.y = 330;
              jerry.x = 10;
      break;

      default: break;
    }
  }

  if(jerry1.position.x > 820){
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: jerry1.y = 150;
              jerry1.x = 10;
      break;

      case 2: jerry1.y = 280;
              jerry1.x = 10;
      break;

      case 3: jerry1.y = 360;
              jerry1.x = 10;
      break;

      default: break;
    }
  }



}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(stone.body);
  }
}


