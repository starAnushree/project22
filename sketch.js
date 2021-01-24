const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,object

function setup() {
  createCanvas(400,400);
engine=Engine.create()
world=engine.world
var option={
  isStatic:true
}
object=Bodies.rectangle(200, 200, 50, 50,option)
World.add(world,object) 
}

function draw() {
  background("black"); 
  Engine.update(engine) 
  rectMode(CENTER)
 rect(object.position.x, object.position.y, 50, 50);
  drawSprites();
}