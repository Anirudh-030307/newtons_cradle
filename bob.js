class Bob {
    constructor(x, y) {
      var options = {
        'isStatic': false,
        'restitution':0,
        'density':0.4,
        'friction':0
      }

      this.body = Bodies.rectangle(x, y, 45, 45, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("white");
      ellipse(0,0, this.width, this.height);
      pop();
    }

  }
  