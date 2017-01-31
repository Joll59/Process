var s;
var szs =  15;
var cheese;
function setup(){
  createCanvas(600,600);
 s  = new Snake();
 frameRate(6);
 pickLocation();
}
function pickLocation(){
  var cols = floor(width/szs);
  var rows = floor(height/szs);
  cheese = createVector(floor(random(cols)), floor(random(rows)))
  cheese.mult(szs);
}
function draw(){
  background(51);
  s.death();
  s.update()
  s.show()

  if(s.eat(cheese)){
    pickLocation()
  };

  fill(244,0,0)
  rect(cheese.x, cheese.y,szs,szs)
}
function keyPressed(){
  if (keyCode  === UP_ARROW){
   s.dir(0,-1)
  }
  else if (keyCode === DOWN_ARROW){
    s.dir (0,1)
  }
  else if (keyCode === RIGHT_ARROW){
    s.dir (1,0)
  }
  else if (keyCode === LEFT_ARROW){
    s.dir (-1,0 )
  }
}
