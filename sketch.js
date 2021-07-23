
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let world;
let engine;

var ball;
var leftground;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;
	groundobject = new ground(width/2,height-50,width,20);
	leftground = new ground(width-100,height-120,20,120);
	right = new ground(900,489,20,120);

	var ball_options = {
		isStatic : false,
	   restitution :0.3,
		friction:0,
		density:1.2
		
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200,200,30,ball_options);
	World.add(world,ball);
	
  
}


function draw() {
  background(0);
  Engine.update(engine);
 // push();
  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
  
  
 // pop();
  groundobject.show();
  leftground.show();
  right.show();
  
  
  //drawSprites();
 
}

		function keyPressed()
{
  if(keyCode === UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:180,y:-190});
	 
    }
}

