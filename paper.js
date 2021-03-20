class Paper {
    constructor(x, y) {
      var options = {
          'restitution':1.3,
          'friction':0,
          'density':1.2,
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.image=loadImage("paper.png");
      this.width = 70;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill(255);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  

  
