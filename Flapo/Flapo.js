var bird;
var pipes = [];
var score = 0;
var maxScore = 0;
function setup() {
  createCanvas(500,500);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(15);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].pass(bird)) {
      score++;
    }

    if (pipes[i].hits(bird)) {
      score = 0;
    }

    if (pipes[i].offscreen()) {
     pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  showScores();

  function showScores() {
  textSize(32);
  text('score: ' + score, 1, 32);
  text('record: ' + maxScore, 1, 64);
}

  if (frameCount % 90 == 0) {
  pipes.push(new Pipe());
  }



}

function keyPressed(){
 if (key == ' ') {
  bird.up();
 }
}
