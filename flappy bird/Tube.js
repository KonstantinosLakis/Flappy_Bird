
function Tube(center){
  this.topBound = center - random(1, 3) * scl;
  this.bottomBound = center + random(1, 3) * scl;
  this.x = width;
  this.hit = false;
  this.move = function(){
    this.x -= 3;
  }
  this.show = function(){
    //rectMode(NORMAL);
    var w = pipeDown.width;
    var ratio = scl / w;
    var h = pipeDown.height * ratio;
    image(pipeMid, this.x, 0, scl, this.topBound - h);
    image(pipeDown, this.x, this.topBound - h, scl, h);
    image(pipeUp, this.x, this.bottomBound, scl,h);
    image(pipeMid, this.x, this.bottomBound + h, scl, height - this.bottomBound -h);
  }
  this.die = function(){
    if (this.x < -scl){
      tubes.shift();
      score ++;
      pointSound.play();
    }
  }
}
