var player;
var enemies = [];
var score = 0;
function setup() {
  createCanvas(600,600);
  player = new Player();
  enemies.push(new Enemies());
}

function draw() {
  background(50, 14, 21); 
  player.show();
  player.update();
  showScore();
  
  for (var i = enemies.length-1; i >= 0; i--) {
   enemies[i].show();
   enemies[i].update();     
   
  if (enemies[i].pass(player)) {
  score++;
  }
  
  if (enemies[i].hits(player)) {
  score = 0;
  }
    
  if (enemies[i].offscreen()) {
   enemies.splice(i, 1); 
    }
  }
  if (frameCount % 10 == 0) {
   enemies.push(new Enemies()); 
  }
  
  function showScore() {
  textSize(32);
  text('Score: ' +score, 1, 32);
  }
  
}

function keyPressed() {
  if (key == ' ') {
   player.up(); 
  }
}
