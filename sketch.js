const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 
var ground;
var boxStick1,boxStick2;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    //var createSprite = new World

    var ground_options ={
        isStatic: true
    }

    paperBall = new PaperBall(100,120,55);
    
    boxStick1 = new Box(635,300,15,80);
    boxStick2 = new Box(520,300,15,80);


    ground = Bodies.rectangle(200,390,200,50,ground_options);
    World.add(world,ground);

}

function draw(){
    background(255);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1300,20);
    
    paperBall.display();    
    
    boxStick1.display();
    boxStick2.display()

    
}


