function Enemies() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = random(width/4);
  this.speed = 7;
  
  this.pased = false;
  
  this.hits = function(player) {
   if (player.y < this.top || player.y > height - this.bottom) {
     if (player.x >this.x && player.x < this.x + this.w) {
       this.passed = true;
       return true;
     } 
   }
   return false;
  }
  
  this.pass = function() {
  if (player.x > this.x && !this.passed) {
  this.passed = true;
  return true;
  }
  return false;
  }
  
  this.show = function() {
    fill(231, 7, 57);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }
   
  this.update = function() {
   this.x -= this.speed; 
  }
  
  this.offscreen = function() {
   if (this.x < -this.w) {
    return true; 
   } else {
   return false;
   }
  }
}
