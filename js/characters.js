function Character(x, y, size, face, img){
  this.x = x;
  this.y = y;
  this.size = size;
  this.face = face;
  this.img = img;
}

//guard that will move vertical
function vguard(x, y, speed, size, face, img){
  Character.call(this, x, y, size, face, img);
  this.speed = speed;
  this.move = function (){
    this.y += this.speed;
  }
}

//guard that will move horizontal
function hguard(x, y, speed, size, face, img){
  Character.call(this, x, y, size, face, img);
  this.speed = speed;
  this.move = function (){
    this.x += this.speed;
  }
};

//food that will keep moving
function mfood (x, y, dx, dy, size, face, img){
  Character.call(this, x, y, size, face, img);
  this.dx = dx;
  this.dy = dy;
  this.move = function (){
    if(this.x + dx > WIDTH-size/3*2 || this.x + dx < size/3*2) {
      dx = -dx;
    }
    if(this.y + dy > HEIGHT-size/3*2 || this.y + dy < size/3*2) {
      dy = -dy;
    }
    this.x+=dx;
    this.y+=dy;
  }
}
