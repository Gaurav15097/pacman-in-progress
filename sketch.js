var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var dotImage;
var pacman
var g1,g2,g3


function preload (){
  dotImage=loadImage("dot.png")
  pacmanImage=loadImage("pacman.png")
  g2Image=loadImage("g2.png")
  g1Image=loadImage("g1.png")
  g3Image=loadImage("g3.png")
} 

function setup() {
  createCanvas(800,400);
  pacman=createSprite(400,150,0,0)  
  pacman.addImage(pacmanImage)
  pacman.scale=0.07

   g2=createSprite(700,370,0,0);
   g2.addImage(g2Image);
   g2.scale=0.2;
   g1=createSprite(50,370,0,0);
   g1.addImage(g1Image);
   g1.scale=0.11;
   g3=createSprite(730,30,0,0);
   g3.addImage(g3Image);
   g3.scale=0.2;
  
  
     g1.velocityX=random(-3,3)
     g2.velocityX=random(-3,3)
     g3.velocityX=random(-3,3)
     g1.velocityY=random(-3,3)
     g2.velocityY=random(-3,3)
     g3.velocityY=random(-3,3)
  
   


  m1=createSprite(400,0,800,9);
  m1.shapeColor="yellow"
  m2=createSprite(400,400,800,9);
  m2.shapeColor="yellow"
  m3=createSprite(00,200,9,400);
  m3.shapeColor="yellow"
  m4=createSprite(800,200,9,400);
  m4.shapeColor="yellow"
  m5=createSprite(200,40,9,80);
  m5.shapeColor="yellow"
  m6=createSprite(600,40,9,80);
  m6.shapeColor="yellow"
  m7=createSprite(200,360,9,80);
  m7.shapeColor="yellow"
  //m8=createSprite(400,360,9,80);
 // m8.shapeColor="yellow"
  m9=createSprite(600,360,9,80);
  m9.shapeColor="yellow"
  m10=createSprite(400,350,300,9);
  m10.shapeColor="yellow"
  m11=createSprite(400,200,150,9);
  m11.shapeColor="yellow"
  m12=createSprite(200,150,50,9);
  m12.shapeColor="yellow"
  m13=createSprite(600,150,50,9);
  m13.shapeColor="yellow"
 // m14 =createSprite(600,50,50,9);
  //m14.shapeColor="yellow"
  m15=createSprite(475,160,9,90); 
  m15.shapeColor="yellow"
  m16=createSprite(330,160,9,90);
  m16.shapeColor="yellow"
  m17=createSprite(350,120,40,9);
  m17.shapeColor="yellow"
  m18=createSprite(450,120,40,9);
  m18.shapeColor="yellow"
  m19=createSprite(200,220,50,9);
  m19.shapeColor="yellow"
  m20=createSprite(600,220,50,9);
  m20.shapeColor="yellow"
  m21=createSprite(70,240,9,90);
  m21.shapeColor="yellow"
  m22=createSprite(90,290,50,9);
  m22.shapeColor="yellow"
  m23=createSprite(70,80,9,90);
  m23.shapeColor="yellow"
  m24=createSprite(90,35,50,9);
  m24.shapeColor="yellow"
  m25=createSprite(700,240,9,90);
  m25.shapeColor="yellow"
  m26=createSprite(670,280,50,9);
  m26.shapeColor="yellow"
  m27=createSprite(700,80,9,90);
  m27.shapeColor="yellow"
  m28=createSprite(680,30,50,9);
  m28.shapeColor="yellow"
  m29=createSprite(400,60,300,9);
  m29.shapeColor="yellow"
  createDot(300,30,0.2);
  createDot(330,30,0.2);
  createDot(360,30,0.2);
  createDot(390,30,0.2);
  createDot(420,30,0.2);
  createDot(450,30,0.2);
  createDot(480,30,0.2);
  createDot(510,30,0.2);
  createDot(540,30,0.2);
  createDot(570,30,0.3);
  createDot(300,90,0.2);
  createDot(330,90,0.2);
  createDot(360,90,0.2);
  createDot(390,90,0.2);
  createDot(420,90,0.2);
  createDot(450,90,0.2);
  createDot(480,90,0.2);
  createDot(510,90,0.2);
  createDot(540,90,0.2);
  createDot(570,90,0.2);
  createDot(90,90,0.2);
  createDot(120,90,0.2);
  createDot(150,90,0.2);
  createDot(180,90,0.2);
  createDot(210,90,0.2);
  createDot(240,90,0.2);
  createDot(270,90,0.2);
  createDot(100,90,0.2);
  createDot(100,120,0.2);
  createDot(100,150,0.2);
  createDot(100,180,0.2);
  createDot(100,210,0.2);
  createDot(100,240,0.2);
  createDot(100,270,0.2);
  createDot(100,150,0.2);
  createDot(700,160,0.2);
  createDot(670,160,0.2);
  createDot(645,160,0.2);
  createDot(645,190,0.2);
  createDot(645,220,0.2);
  createDot(645,250,0.2);
  createDot(645,120,0.2);
  createDot(645,90,0.2);
  createDot(645,60,0.2);
  createDot(630,30,0.2);
  createDot(610,200,0.2);
  createDot(580,200,0.2);
  createDot(550,200,0.2);
  createDot(520,200,0.2);
  createDot(550,230,0.2);
  createDot(520,230,0.2);
  createDot(490,230,0.2);
  createDot(460,230,0.2);
  createDot(430,230,0.2);
  createDot(400,230,0.2);
  createDot(370,230,0.2);
  createDot(340,230,0.2);
  createDot(310,230,0.2);
  createDot(280,230,0.2);
  createDot(250,230,0.2);
  createDot(220,260,0.2);
  createDot(190,260,0.2);
  createDot(160,260,0.2);
  createDot(130,360,0.2);
  createDot(100,360,0.2);
  createDot(70,360,0.2);
  createDot(40,360,0.2);
  createDot(160,360,0.2);
  createDot(240,375,0.2);
  createDot(270,375,0.2);
  createDot(300,375,0.2);
  createDot(330,375,0.2);
  createDot(360,375,0.2);
  createDot(390,375,0.2);
  createDot(420,375,0.2);
  createDot(450,375,0.2);
  createDot(480,375,0.2);
  createDot(510,375,0.2);
  createDot(540,375,0.2);
  createDot(570,375,0.2);
  createDot(570,350,0.2);
  createDot(570,320,0.2);
  createDot(540,320,0.2);
  createDot(510,320,0.2);
  createDot(540,320,0.2);
  createDot(570,320,0.2);
  //createDot(600,320,0.2);
  createDot(630,320,0.2);
  createDot(660,320,0.2);
  createDot(690,320,0.2);
  createDot(720,320,0.2);
  createDot(750,320,0.2);
  createDot(780,320,0.2);
  createDot(480,320,0.2);
  createDot(450,320,0.2);
  createDot(420,320,0.2);
  createDot(390,320,0.2);
  createDot(360,320,0.2);
  createDot(330,320,0.2);
  createDot(300,320,0.2);
  createDot(270,320,0.2);
  createDot(240,320,0.2);
  createDot(760,50,0.2);
  createDot(760,80,0.2);
  createDot(760,110,0.2);
  createDot(760,140,0.2);
  createDot(760,170,0.2);
  createDot(760,200,0.2);
  createDot(760,230,0.2);
  createDot(760,260,0.2);
  createDot(760,290,0.2);
  createDot(160,80,0.2);
  createDot(35,110,0.2);
  createDot(35,140,0.2);
  createDot(35,170,0.2);
  createDot(35,200,0.2);
  createDot(35,230,0.2);
  createDot(35,260,0.2);
  createDot(35,290,0.2);
  createDot(35,50,0.2);
  createDot(35,320,0.2);
  createDot(35,20,0.2);
  createDot(35,80,0.2);
  createDot(35,200 ,0.4);
  createDot(35,20,0.4);
  createDot(640,360,0.2);
  createDot(640,300,0.4);
}

function draw() {
  background("black") 
  bounceAll(g1);
  bounceAll(g2);
  bounceAll(g3); 
  drawSprites();
  if (keyDown(UP_ARROW)){
    pacman.y=pacman.y-2;
  }
    if (keyDown(DOWN_ARROW)){
      pacman.y=pacman.y+2;
    }
      if (keyDown(LEFT_ARROW)){
        pacman.x=pacman.x-2;
      }
        if (keyDown(RIGHT_ARROW)){
          pacman.x=pacman.x+2;
        }
        bounceAll(pacman)
   
  

}
function createDot(x,y,sc){
  dot=createSprite(x,y,10,10);
  dot.addImage(dotImage);
  dot.scale=sc
}
function bounceAll(x){
 x.bounceOff(m1);
 x.bounceOff(m2);
 x.bounceOff(m3);
 x.bounceOff(m4);
 x.bounceOff(m5);
 x.bounceOff(m6);
 x.bounceOff(m7);
  x.bounceOff(m9);
 x.bounceOff(m10);
 x.bounceOff(m11);
 x.bounceOff(m12);
 x.bounceOff(m13);
 
 x.bounceOff(m15);
 x.bounceOff(m16);
 x.bounceOff(m17);
 x.bounceOff(m18);
 x.bounceOff(m19);
 x.bounceOff(m20);
 x.bounceOff(m21);
 x.bounceOff(m22);
 x.bounceOff(m23);
 x.bounceOff(m24);
 x.bounceOff(m25);
 x.bounceOff(m26);
 x.bounceOff(m27);
 x.bounceOff(m28);
 x.bounceOff(m29);
}
 funtiom destroyingcoins 