var dt = 1 / 60;
var g = 9.81 * dt;
var scl = 20;
var grav;
var score = 0;
var bird;
var birdImg1;
var birdImg2;
var bg;
var pipeUp;
var pipeDown;
var pipeMid;
var hitSound;
var pointSound;
var windSound;
var tubes = [];
function setup(){
 createCanvas(1440, 810);
 textSize(15);
 textAlign(CENTER);
 grav = createVector(0, g);
 birdImg1 = loadImage('bird1.png');
 birdImg2 = loadImage('bird2.png');
 pipeUp = loadImage('pipeUp.png');
 pipeDown = loadImage('pipeDown.png');
 pipeMid = loadImage('pipeMid.png');
 bg = loadImage('bg.jpg');
 hitSound = loadSound('hit.wav');
 pointSound = loadSound('point.wav');
 wingSound = loadSound('wing.wav');
 bird = new Bird(width / 10, height / 2);
}

function draw() {
  if (frameCount % 90 == 0){
    tubes.push(new Tube(random(scl, height * 0.8 - scl)));
  }
  background(bg);
  displayHUD();
  for (var i = 0; i < tubes.length; i ++){
    var t = tubes[i];
    t.move();
    t.show();
    t.die();
  }
  bird.physics();
  bird.show();
  if(tubes[0]){
  bird.checkForDeath();
}
}
function mousePressed(){
  bird.animate();
  wingSound.play();
  if(bird.vel.y > 0){
   bird.vel.set(0, -4);
 } else {
   bird.vel.y -= Math.abs(-8-bird.vel.y) / 2;
 }
}
function displayHUD(){
  strokeWeight(4);
  fill(255);
  rectMode(CENTER);
  rect(width / 2 , height / 8 - 5,scl ,scl);
  rectMode(NORMAL);
  fill(0);
  text(score, width / 2 , height / 8);
  strokeWeight(1);
}
