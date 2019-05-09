
function Bird(x, y){
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.image = birdImg1;
  this.physics = function(){
    this.gravity();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  this.gravity = function(){
    this.acc.add(grav);
  }
  this.show = function(){
    var angle = map(this.vel.y, -8, 16, -HALF_PI, HALF_PI);
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    var aspect = this.image.width / this.image.height;
    image(this.image, 0, 0, aspect * scl, scl);
  }
  this.checkForDeath = function(){
  var t = tubes[0];
    if(Math.abs(this.pos.x - t.x) < scl){
      if((this.pos.y < t.topBound || this.pos.y > t.bottomBound - scl) && !t.hit){
       score = 0;
       hitSound.play();
       t.hit = true;
      }
    }
  }
  this.animate = function(){
    this.image = (this.image == birdImg1? birdImg2 : birdImg1);
  }
}
