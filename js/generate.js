var guards = [];
var foods = [];
var hero;

function createGuards(){
  var gcase = Math.floor(Math.random()*4);
  switch (gcase) {
    case 0:
      var guard = new vguard(Math.random() * WIDTH + 10, -10, guardSpeed, guardSize, 1, guardImg);
      guards.push(guard);
      break;
    case 1:
    var guard = new vguard(Math.random() * WIDTH - 10, WIDTH + 10, guardSpeed * -1, guardSize, 0, guardImg);
    guards.push(guard);
      break;
    case 2:
    var guard = new hguard(-10, Math.random() * HEIGHT + 10, guardSpeed, guardSize, 3, guardImg);
    guards.push(guard);
      break;
    case 3:
    var guard = new hguard(HEIGHT + 10, Math.random() * HEIGHT - 10, guardSpeed * -1, guardSize, 2, guardImg);
    guards.push(guard);
      break;
    default:
  }
}

function createGuards2(dis){
   guards.push(new vguard(dis + 10, -10, guardSpeed2, guardSize, 1, guardImg));
   guards.push(new vguard(WIDTH - dis -10, HEIGHT + 10, guardSpeed2 * -1, guardSize, 0, guardImg));
   guards.push(new hguard(-10, WIDTH - dis - 10, guardSpeed2, guardSize, 3, guardImg));
   guards.push(new hguard(WIDTH +10, dis + 10, guardSpeed2 * -1, guardSize, 2, guardImg));
}

function createFoods(f){
  for (var i =0; i<f; i++){
      var food = new mfood(Math.random() * (WIDTH -100 ) + 30  , Math.random() * (HEIGHT - 60) + 30, Math.random() * 10 - 5, Math.random() * 10 - 5, foodSize, 0, foodImg);
      foods.push(food);
  }
}

function createHero(){
  hero = {
    x : x,
    y : y,
    size :heroSize,
    hp : hp,
    speed : speed,
    img : heroImg,
    view : view,
    face : 1,
  }
}
