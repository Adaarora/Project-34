class Monster{
    constructor(x,y,r){
        var Options={
            density:5,
            frictionAir:0
        }
    this.x=x;
    this.y=y;
this.r=r
this.image=loadImage("images/Monster-01.png");
this.body=Bodies.circle(this.x,this.y,(this.r)/2,Options)
World.add(world,this.body);
}
display(){
    var monsPos=this.body.position;
    push();
    translate(monsPos.x,monsPos.y-100);
    rectMode(CENTER)
    fill(255,0,255);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r)
    pop();
}


}