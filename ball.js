class Ball {
    constructor(x, y, radius) {
      var options = {
          restitution:0.4,
          friction:1.0,
          density:2,
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;

      this.image=loadImage("polygon.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      //fill(255);
      strokeWeight(2);
      stroke("black");
      image(this.image,0, 0,40 ,40 );
      pop();
    }
  };
  