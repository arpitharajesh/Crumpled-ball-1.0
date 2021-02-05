
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground, round,box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	// sprites and bodies
	ground =createSprite(400,360,1000,20);
	ground.shapeColor = color("yellow");

	box1 = new dustbin(500,300,20,100);
	box2 = new dustbin(590,340, 200,20);
	box3 = new dustbin(700,300, 20,100);


	round = new ball(100,330,40);

	var render = Render.create({
		 element: document.body,
		  engine: engine,
		   options:  {
				width: 1200,
				height: 700,
				 wireframes: false 
				}
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  round.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed(){

	if( keyCode === UP_ARROW){
		Matter.Body.setStatic(round.body, false);
		Matter.Body.applyForce(round.body,round.body.position,{x:300, y: -200})
		
	  }
	  
}

