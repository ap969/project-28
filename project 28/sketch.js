
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var treeobj,stoneobj,groundobj,launcherobj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingforce = 100;
function preload()
{
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stoneobj = new Stone(235,420,30);
	mango1 = new mango(1100,100,30);
	mango2 = new mango(1170,130,30);
	mango3 = new mango(1010,140,30);
	mango4 = new mango(1000,70,30);
	mango5 = new mango(1100,70,30);
	mango6 = new mango(1000,230,30);
	mango7 = new mango(900,230,40);
	mango8 = new mango(1140,150,40);
	mango9 = new mango(1100,230,40);
	mango10 = new mango(1200,200,40);
	mango11 = new mango(1120,50,40);
	mango12 = new mango(900,160,40);
	treeobj = new tree(1050,580);
	groundobj = new ground(width/2,600,width,20);
	launcherobj = new launcher(stoneobj.body,{x:235,y:420});
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		width:1300,
		height:600,
		wireframes:false
		}

    })
	Engine.run(engine);
  
}


function draw() {
  background(230);
 textSize(25);
 text("Press space to get a second chance",50,50);
 image(boy,200,340,200,300);
 
 


 detectCollision(stoneobj,mango1); 
 detectCollision(stoneobj,mango2);
 detectCollision(stoneobj,mango3); 
 detectCollision(stoneobj,mango4); 
 detectCollision(stoneobj,mango5); 
 detectCollision(stoneobj,mango6); 
 detectCollision(stoneobj,mango7); 
 detectCollision(stoneobj,mango8); 
 detectCollision(stoneobj,mango9); 
 detectCollision(stoneobj,mango10); 
 detectCollision(stoneobj,mango11);
 detectCollision(stoneobj,mango12);
 
 stoneobj.display();
 treeobj.display();
 groundobj.display();
 launcherobj.display();
 mango1.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 mango11.display();
 mango12.display();



  drawSprites();
 
}



function MouseDragged() {
	Matter.Body.setPosition(stoneobj.body, {x: mouseX , y: mouseY});
} 



function MouseReleased() {
	launcherobj.fly();
}


function detectCollision(lstone,lmango) {
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r + lstone.r) {
	Matter.Body.setStatic(lmango.body,false);
}
}

