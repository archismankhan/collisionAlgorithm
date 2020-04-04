var movingrectangle;
var fixedrectangle;


function setup() {
  createCanvas(800,800);
  movingrectangle = createSprite(400, 200, 50, 50);
  fixedrectangle = createSprite(200,100,50,50);
  movingrectangle.shapeColor = "blue";
  fixedrectangle.shapeColor = "blue";



}

function draw() {
  background(255,255,255);
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;
  
  if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    movingrectangle.y-fixedrectangle.y<fixedrectangle.height/2+movingrectangle.height/2&&
    fixedrectangle.y-movingrectangle.y<fixedrectangle.height/2+movingrectangle.height/2){
      movingrectangle.shapeColor = "red";
      fixedrectangle.shapeColor = "red";

    }
    else{
      movingrectangle.shapeColor = "blue";
      fixedrectangle.shapeColor = "blue";
    }

  drawSprites();
}