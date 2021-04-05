class Cheese extends BaseClass {

  constructor(x, y, width, height){
  super(x,y,width,height)
  this.image = loadImage("cheese.png");
  this.visibility = 255;
    
  }

  display(){
    
 // console.log(this.body.speed)


if(this.body.speed < 3) {
  super.display();
}


else{
  
  push();
  this.visibility = this.visibility-5;
  World.remove(world, this.body);
  tint(255,this.visibility)
  image(this.image, this.body.position.x, this.body.position.y ,this.width, this.height);
  pop();
}



}
score() {
  if(this.visibility<0 && this.visibility >-105){
    score++
  }
}
}