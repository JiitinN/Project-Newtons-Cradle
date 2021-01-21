
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject3,bobObject4,bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof1;
var diameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(350,100,300,30);
	World.add(world, roof1);
	diameter=50

	bobObject1 = new Bob(225, 300, 35);
	bobObject2 = new Bob(285, 300, 35);
	bobObject3 = new Bob(350, 300, 35);
	bobObject4 = new Bob(410, 300, 35);
	bobObject5 = new Bob(475, 300, 35);

	rope1 = new Chain(bobObject1.body, roof1.body, -diameter*2, 0)
	World.add(world, rope1);
	rope2 = new Chain(bobObject2.body, roof1.body, -diameter*1, 0)
	World.add(world, rope2);
	rope3 = new Chain(bobObject3.body, roof1.body, -diameter*0, 0)
	World.add(world, rope3);
	rope4 = new Chain(bobObject4.body, roof1.body, -diameter*1, 0)
	World.add(world, rope4);
	rope5 = new Chain(bobObject5.body, roof1.body, -diameter*2, 0)
	World.add(world, rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');

  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



