var player;
var enemies;
var score = 0;
var maxScore = 0;
var gameoverFrame=0;
var isOver = false;

var touched = false;
var prevTouched = touched;

function setup() {
  createCanvas(600,600);
  reset();
}

function draw() {
  background(50, 14, 21); 
  player.show();
  player.update();
  showScore();
  
  if ((frameCount-gameoverFrame) % 150 == 0) {
    enemies.push(new Enemies());
  }  
  
  for (var i = enemies.length-1; i >= 0; i--) {
   enemies[i].show();
   enemies[i].update();     
   
  if (enemies[i].pass(player)) {
  score++;
  }
  
  if (enemies[i].hits(player)) {
  gameover();
  }
    
  if (enemies[i].offscreen()) {
   enemies.splice(i, 1); 
    }
  }
  if (frameCount % 10 == 0) {
   enemies.push(new Enemies()); 
  }
  
  if (touched && !prevTouched) {
   player.up(); 
  }

  prevTouched = touched;
  
}

function showScore() {
  textSize(32);
  text('Score: ' +score, 1, 32);
  text('Record: ' + maxScore, 1, 64);
  }
  
function gameover() {
   textSize(64);
   textAlign(CENTER,CENTER);
   text("T'ES NUL", width / 2, height / 2);
   textAlign(LEFT,BASELINE);
   maxScore = max(score, maxScore);
   isOver=true;
   noLoop();
  }
  
  function reset() {
   isOver=false;
   enemies = [];
   score = 0;
   player = new Player();
   enemies.push(new Enemies()); 
   gameoverFrame=frameCount-1;
   loop();
  }
  
function keyPressed() {
  if (key == ' ') {
   player.up(); 
   if (isOver) {
     reset();
    }
  }
}
function touchStarted() {
 if (isOver) {
 reset();
 }
}
