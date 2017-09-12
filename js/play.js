
var drawPlay = function(){
   ctx.save();
   _dark();
   _view();
   _scene();
   _hero();
   _guard();
   _food();
   ctx.restore();
   _time();
   _hp();
   _animate();
}

//Initialize a new game
var init = function (){
  resetGame();
  createFoods(fnum);
  createHero();
  start = new Date().getTime();
  guardSpeedUp = 1;
  minusView = setInterval(function(){
    if(hero.view > limitView && focus){
      hero.view--;
    }
  }, minusSpeed);

  setGuard = setInterval(function () {
    if(focus){
      if(gnum > gnumLimit){
        gnum = gnumLimit;
      }
      else{
        gnum += gnumRate;
      }
  
      if(guardSpeed > guardSpeedLimit){
        guardSpeed = guardSpeedLimit;
      }
      else{
        guardSpeed += guardSpeedUp;
      }
  
      for (var i = 0 ; i < gnum; i++){
        setTimeout(function () {
          createGuards();
        }, Math.random() * guardTime);
      }
    }
  }, guardTime);

  var dis = 0;
   setGuard2 = setInterval(function(){
     if(focus){
      if(score > beginScore){
        if(guardSpeed2 > guardSpeedLimit2){
          guardSpeed2 = guardSpeedLimit2;
        }
        else{
          guardSpeed2 += guardSpeedUp2;
        }
        if(dis > 640) dis = 0;
        createGuards2(dis);
        dis += 30;
      }
     }
   }, guardTime2);

   countScore = setInterval(function (){
     if (focus) score += 1;
    }, 100);
}

var update = function(){
  //moves
  if(keys["38"] || keys["87"]){
      if (hero.y-hero.speed > hero.size/2)hero.y -= hero.speed;
  }
  if(keys["40"] || keys["83"]){
      if (hero.y+hero.speed < HEIGHT-hero.size/2) hero.y += hero.speed;
  }
  if(keys["37"] || keys["65"]){
      if (hero.x-hero.speed > hero.size/2) hero.x -= hero.speed;
  }
  if(keys["39"] || keys["68"]){
      if (hero.x+hero.speed < WIDTH-hero.size/2)hero.x += hero.speed;
  }
  detectFood();
  detectGuard();
  if (foods.length <= 0) createFoods(fnum);

}

  //detect the collision, when hero touches the food, eat it.
function detectFood(){
  for (var i in foods){
    foods[i].move();
    if (Math.sqrt(Math.pow(foods[i].x-hero.x, 2)+Math.pow(foods[i].y-hero.y, 2))<=foods[i].size/2+hero.size/2){
      eatAudio();
      if(hero.view > limitUpView){
        hero.view = limitUpView;
      }
      else{
        hero.view += plusView;
      }
      if (hero.hp < 10) hero.hp += 0.5;
      foods.splice(i, 1);
      i--;
      continue;
    }
  }
}

function detectGuard(){
  for (var i in guards){
    guards[i].move();
    if (Math.sqrt(Math.pow(guards[i].x-hero.x, 2)+Math.pow(guards[i].y-hero.y, 2))<=guards[i].size/2+hero.size/2){
      hitAudio();
      hero.hp -= 1;

      blood = true;
      setTimeout(function(){
        blood = false;
      }, 200);

      if (hero.hp <= 0) {
        deadAudio();
        //reset game
        newGame = true;
        //move to the gameover page.
        s = 3;
        clearInterval(minusView);
        clearInterval(setGuard);
        clearInterval(setGuard2);
        clearInterval(countScore);

      }
      guards.splice(i, 1);
      i--;
      continue;
    }
    if (guards[i].x<0-guards[i].size || guards[i].x>WIDTH+guards[i].size){

      guards.splice(i, 1);
      i--;
      continue;
    }
    if (guards[i].y<0-guards[i].size || guards[i].y>HEIGHT+guards[i].size) {

      guards.splice(i, 1);
      i--;
      continue;
    }
  }

}

var drawOver = function(){
    _over();
}

var drawStarter = function(){
    _starter();
}

var drawPause = function(){
    _pause();
}

var drawDescribe = function(){
  _describe();
}

function resetGame(){
  guards.length = 0;
  foods.length = 0;
  score = 0;

  gnum = 4;
  guardSpeed = 1;
  guardSpeed2 = 5;

}
