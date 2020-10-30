class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
        'restitution':0.3,
          'friction':0.5,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("purple");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };

  function keyPressed() {
    if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body,paper.body.position,{x:27,y:-27});
       
   }
   }
  