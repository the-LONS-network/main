let particles = []; //preps for creation an arraylist of particles

class particle {
  constructor(x_, y_, a, b) { //define our povar: set our particle's values
    this.x = 0;
    this.y = 0;
    this.xs = 0;
    this.ys = 0;
    this.x = x_;
    this.y = y_;
    this.r = random(2, 40);
    this.r2 = this.r * 7 / 8;
    this.xs = (random(-3, 3)) / this.r2;
    this.ys = (random(-3, 3)) / this.r2;
    this.no_m = random([true, false, false, false, false, false]);
    if (this.no_m) {
      this.x = random(a);
      this.y = random(b);
    }
  }

  move() { //move the particle, based on speed
    if (!this.no_m) {
      this.x += this.xs;
      this.y += this.ys;
    }
    if (this.x < -d || this.x > width + d) { //bounce off the walls
      if (random([true, false])) {
        this.xs = -this.xs;
      } else {
        if (this.x < -d) {
          this.x = width + d;
        } else {
          if (this.x > width + d) {
            this.x = -d;
          }
        }
      }
      if (this.y < -d || this.y > height + d) {
        if (random([true, false])) {
          this.ys = -this.ys;
        } else {
          if (this.y < -d) {
            this.y = height + d;
          } else {
            if (this.y > height + d) {
              this.y = -d;
            }
          }
        }
      }
    }
  }
  display() { //draw the black outline as well as the white circle
    stroke(0);
    strokeWeight(10);
    ellipse(this.x, this.y, this.r, this.r);
    noStroke();
    strokeWeight(1);
  }
  display_white() { //draw the white again
    noStroke();
    fill(255);
    if (this.no_m) {
      fill(255, 0, 0);
    }
    ellipse(this.x, this.y, this.r2, this.r2);
    noStroke();
  }
}

let no_of = 2;
let dbp = 2; //distance between povars
let d = 2;



function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("backround");
  dbp = (width) / 4;
  d = dbp / 2;
  no_of = (4 * width) / 100;
  if (width < 100) {
    no_of = 30
  }
  for (let i = 0; i < no_of; i++) {
    particles[i] = new particle(random(-dbp, width + dbp), random(-dbp, height + dbp), width, height); //fills it with 75 povars at random locations
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  dbp = (width) / 4;
  d = dbp / 2;
  no_of = (4 * width) / 100;
  if (width < 100) {
    no_of = 30;
  }
  particles = [];
  for (let i = 0; i < no_of; i++) {
    particles[i] = new particle(random(-dbp, width + dbp), random(-dbp, height + dbp), width, height); //fills it with 75 povars at random locations
  }
}


function draw() {
  background(0, 50);
  for (let i = 0; i < no_of; i++) { //for each povar in ALpovars, starting from the last
    particles[i].move(); //call the povar we're on "p"

    for (let j = 0; j < no_of; j++) { //for each povar in ALpovars, starting from the last
      var dist = (sqrt(pow((particles[i].x - particles[j].x), 2) + pow((particles[i].y - particles[j].y), 2))); //define "dist" as the distance between p and pj
      if (dist < dbp) { //if the povars are close enough together, draw a line between them
        stroke(255);
        line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
      }
    }
    particles[i].display();
  }
  for (let i = 0; i < no_of; i++) {
    particles[i].display();
  }
  for (let i = 0; i < no_of; i++) {
    particles[i].display_white();
  }
}
