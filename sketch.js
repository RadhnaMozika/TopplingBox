const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var ground, box1, box2;
function setup() {
  createCanvas(800,600);
  myengine=Engine.create();
  myworld=myengine.world;

  
  

  box1=new Box(200,200,50,50);
  box2=new Box(230, 50, 50, 100);
  console.log(box2.body);
  ground=new Ground(400, 580, 800, 30);


}

function draw() {
  background(20); 
  Engine.update(myengine); 
  box1.display();
  
  box2.display();
  ground.display();

}