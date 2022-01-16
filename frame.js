function Frame(x, y){
  this.x = x;
  this.y = y;
  this.xspeed = 1;
  this.yspeed = 1;
  
  randCol();
  this.update = function(val){
    this.x += this.xspeed * val;
    this.y += this.yspeed * val;
    
    if(this.x > pg.width - 75){
      this.xspeed = -this.xspeed;
      randCol();
    }
    
    if(this.x < 25){
      this.xspeed = -this.xspeed;
      randCol();
    }
    
    if(this.y > pg.height - 25){
      this.yspeed = -this.yspeed;
      randCol();
    }
    
    if(this.y < 25){
      this.yspeed = -this.yspeed;
      randCol();
    }
  }
//   this.update = function(dvd){
//     this.x = Logo.x;
//     this.y = Logo.y;
  this.show = function(){
    rect(this.x, this.y, 100, 50);
  }
}

function randCol(){
  var col = {
      r: 0, g: 0,
      b: 0, a: 0,
  }
    //set color
  this.r = random(1, 249);
  this.g = random(1, 199);
  this.b = random(1, 99);
  this.a = 100;
  noStroke();
  fill(this.r, this.g, this.b, this.a);
}