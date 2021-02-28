const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingshot,bird;
function preload() {
    backgroundImg = loadImage("sprites/2.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(500,350,400,10);
    ground2 = new Ground(900,200,400,10);

    bird = new hexa(200,50)

    box1 = new Box(350,320,70,70);
    box2 = new Box(450,320,70,70);
    box3 = new Box(550,320,70,70);
    box4 = new Box(650,320,70,70);
    box5 = new Box(400,240,70,70);
    box6 = new Box(500,240,70,70);
    box7 = new Box(600,240,70,70);
    box8 = new Box(450,160,70,70);
    box9 = new Box(550,160,70,70);
    box10 = new Box(500,80,70,70);

    boxa = new Box(800,160,70,70)
    boxb = new Box(900,160,70,70)
    boxc = new Box(1000, 160, 70, 70)
    boxd = new Box(850,80,70,70)
    boxe = new Box(950,80,70,70)
    boxf = new Box(900,0,70,70  )


    slingshot = new Slingshot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    textSize(30);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,40);


    ground.display();
    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    boxa.display();
    boxb.display();
    boxc.display();
    boxd.display();
    boxe.display();
    boxf.display();
    bird.display();

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}