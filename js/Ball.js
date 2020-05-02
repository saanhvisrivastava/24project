class Ball {
  constructor(x,y,radius) {
    var options ={
        isStatic:true
    }
    this.body=Bodies.circle(x,y,50,options);
    World.add(world,this.body);
    
  }

  display() {
    var pos=this.body.position;
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,50,50);
    fill("orange");
    


  }
}
