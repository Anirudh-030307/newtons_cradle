const Constraint =Matter.Constraint;
var roof,rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800,700);

	engine = Engine.create();

	world = engine.world;

	roof= new Roof(300,50,1000,10)

	bob1= new Bob(100 , 400);
	rope1=new Rope(bob1.body,roof.body,0,0);
	bob2= new Bob(200, 400);
	rope2=new Rope(bob2.body,roof.body,50,0);
	bob3= new Bob(300 , 400);
	rope3=new Rope(bob3.body,roof.body,100,0);
	bob4= new Bob(450 , 400);
	rope4=new Rope(bob4.body,roof.body,150,0);
	bob5= new Bob(500 , 400);
	rope5=new Rope(bob5.body,roof.body,200,0);

	Engine.run(engine);
  
}

function draw() {

	background(0);

	Engine.update(engine);

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-300});
	}
}

