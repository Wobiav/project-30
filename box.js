class Box {
    constructor(x, y, width, height) {
      var options = {
          restitution:0.4,
          friction:1.0,
          density:2,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      console.log(this.body.speed);
      if(this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //fill(255);
        strokeWeight(2);
        stroke("black");  
        rect(0, 0, this.width, this.height);
        pop();
      }
      

      
      
      else{
          World.remove(world, this.body);
          push()
        this.visibility=this.visibility-5
        pop();
        tint(255, this.visibility)
        

      }

      


    }
  
  };
  