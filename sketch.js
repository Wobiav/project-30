
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(600, height, width, 40);
	platform1 = new Ground(450, 450, 375, 20);
	platform2 = new Ground(900, 275, 275, 20)

	//first level first platform
	block1 = new Box(320, 440, 50, 60);
	block2 = new Box(370, 440, 50, 60);
	block3 = new Box(420, 440, 50, 60);
	block4 = new Box(470, 440, 50, 60);
	block5 = new Box(520, 440, 50, 60);
	block6 = new Box(570, 440, 50, 60);
	//second level first platform
	block7 = new Box(370, 380, 50, 60);
	block8 = new Box(420, 380, 50, 60);
	block9 = new Box(470, 380, 50, 60);
	block10 = new Box(520, 380, 50, 60);
	//third level first platform
	block11 = new Box(420, 320, 50, 60);
	block12 = new Box(470, 320, 50, 60);
	//fourth level first platform
	block13 = new Box(445, 260, 50, 60);
	//first level second platform
	block14 = new Box(800, 265, 50, 60);
	block15 = new Box(850, 265, 50, 60);
	block16 = new Box(900, 265, 50, 60);
	block17 = new Box(950, 265, 50, 60);
	block18 = new Box(1000, 265, 50, 60);
	//second level second platform
	block19 = new Box(850, 205, 50, 60);
	block20 = new Box(900, 205, 50, 60);
	block21 = new Box(950, 205, 50, 60);
	//third level second platform
	block22 = new Box(900, 245, 50, 60);

	ball = new Ball(50, 200, 20);

	  slingShot = new Slingshot(ball.body,{x:100,y:200});

	
  
}


function draw() {
  //rectMode(CENTER);
  background(58, 45, 45);
  ground.display();
  platform1.display();
  platform2.display();
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  fill("pink");
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  fill("turquoise")
  block11.display();
  block12.display();
  fill("grey")
  block13.display();
  fill("skyblue");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("turquoise");
  block19.display();
  block20.display();
  block21.display();
  fill("pink")
  block22.display();

  ball.display();

  
  
  

  drawSprites();
 
}

function mouseDragged(){
  
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
    
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(ball.body);
  }
}
