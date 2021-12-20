const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bola, solo;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var bola_options = {
    frictionAir: 0.01,
    restitution: 1
  };

  bola = Bodies.circle(200,30,30, bola_options);
  World.add(world, bola);

  var solo_options = {
    isStatic: true
  };

  solo = Bodies.rectangle(200,400,400,40, solo_options);
  World.add(world, solo);
}

function draw() 
{
  background("black");
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(bola.position.x, bola.position.y,30);

  rectMode(CENTER);
  rect(solo.position.x, solo.position.y, 400,40);
}
