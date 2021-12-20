const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  Engine.update(engine);
}

