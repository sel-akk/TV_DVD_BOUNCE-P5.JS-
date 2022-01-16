function Logo(val){
  this.x = random(25, 725);
  this.y = random(25, 375);
  this.xspeed = 1;
  this.yspeed = 1;
  
  this.update = function(val, img) {
    this.x += this.xspeed * val;
    this.y += this.yspeed * val;
    
    // if the logo hits a border
    if(this.x > pg.width - 75){
      this.xspeed = -this.xspeed;
    }
    
    if(this.x < 25){
      this.xspeed = -this.xspeed;
    }
    
    if(this.y > pg.height - 25){
      this.yspeed = -this.yspeed;
    }
    
    if(this.y < 25){
      this.yspeed = -this.yspeed;
    }
  }
  
  this.show = function(img){
    image(img, this.x, this.y, 100, 50);
  }
}