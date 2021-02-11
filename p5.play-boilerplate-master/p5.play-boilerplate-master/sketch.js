function setup() {
  createCanvas(800,400);
  name2=createSprite(400, 200, 50, 50);
  name2.shapeColor="blue"
  name1=createSprite(300,150,60,60)
  name1.shapeColor="red"
}

function draw() {
  background(255,255,255);  
drawSprites();

name1.x=mouseX
name1.y=mouseY
if(isTouching()){
        name1.shapeColor="black"
        name2.shapeColor="green"

      }
      else{
        name2.shapeColor="blue"
        name1.shapeColor="red"
      }
}
function isTouching(){
  if(name1.x-name2.x<name2.width/2+name1.width/2
    &&name2.x-name1.x<name2.width/2+name1.width/2
    &&name1.y-name2.y<name2.height/2+name1.height/2
    &&name2.x-name1.x<name2.height/2+name1.height/2){
return true
    }
    else{
return false
    }
}