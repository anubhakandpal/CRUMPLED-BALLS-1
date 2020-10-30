
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3
var ground;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	//Create the Bodies Here.
	wall1=new Durstbin(900,370,20,100);
	wall2=new Durstbin(700,350,20,100);
	wall3=new Durstbin(800,350,200,20);

	paper=new Paper(100,350,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  wall1.display();
  wall2.display();
  wall3.display();
  paper.display();
  drawSprites();
 
}



