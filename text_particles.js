class text_particle_ {
    constructor(x_, y_) { //define our povar: set our particle's values
      this.loc = createVector(x_, y_);
      this.mov = createVector(0, 0);
      this.r = random(6, 10);
    }
  
    move(arrOfPoints, i) { //move the particle, based on speed
        if (dist(arrOfPoints[i]) > 0){
            this.mov = createVector(dist(arrOfPoints[i])).div(this.loc)
            this.loc.add(this.mov)
        }
    }
  
    display() { //draw the black outline as well as the white circle
      stroke(255);
      strokeWeight(10);
      ellipse(this.x, this.y, this.r, this.r);
      noStroke();
      strokeWeight(1);
    }
  }