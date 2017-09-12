var c1 = [], c2 =[];

for(var i =0; i < 100; i++){
   c1.push(Math.floor(Math.random() * WIDTH));
   c2.push(Math.floor(Math.random() * HEIGHT));
}

var _dark = function(){
   ctx.fillStyle = 'rgba(0,0,0,1)';
   ctx.fillRect(0,0,WIDTH, HEIGHT);
}

var _view = function(){

   ctx.beginPath();
   ctx.shadowBulr = 20;
   ctx.shadowColor = "white";
   ctx.arc(hero.x, hero.y , hero.view, 0, 2*Math.PI);

   for( var fo in foods){
     var f = foods[fo];
     ctx.arc(f.x, f.y, foodView, 0, 2 * Math.PI);
   }


   ctx.clip();

   ctx.shadowBulr = 0;
   ctx.shadowOffsetY = 0;

}

var _scene = function(){

   for(var i =0; i < 700; i+=45){
       for(j = 0; j < 700; j+=45){
           ctx.drawImage(bg, 0, 0, 30, 30, i, j, 45, 45);
       }
   }
}

var _hero = function(){

 var h = hero;
 ctx.drawImage(h.img, heroPicSize * h.face, heroPicSize * ig, heroPicSize -2 , heroPicSize, h.x - heroDrawSize * 0.5, h.y - heroDrawSize * 0.5, heroDrawSize, heroDrawSize);
}

var _guard = function(g){
 for(var gu in guards){
   var g = guards[gu];
   ctx.drawImage(g.img, guardPicSize * g.face, guardPicSize * ig, guardPicSize, guardPicSize, g.x - guardDrawSize * 0.5, g.y - guardDrawSize * 0.5, guardDrawSize, guardDrawSize);
 }
}

var _food = function(){
 for(var fo in foods){
   var f = foods[fo];
   ctx.drawImage(f.img, foodPicSize * f.face, foodPicSize * ig, foodPicSize, foodPicSize, f.x - foodDrawSize * 0.5, f.y - foodDrawSize * 0.5, foodDrawSize, foodDrawSize);
 }
}

var _animate = function(){

    if(blood){
      ctx.fillStyle='rgba(255, 0, 0, 0.4)';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }

}

var _time = function(){

      drawText("Time " + score + " secs", 4, '#FF4300', 400, 20);

}

var _hp = function (){

  drawText("HP", 4, '#FF4300', 50, 20);

  ctx.fillStyle='rgba(255, 10, 10, 1)';
  for(var i = 0; i < hero.hp; i+=0.5){
    ctx.fillRect(90 + i * 10 + Math.floor(i) * 10 , 21, 10, 20);
  }

}


var _starter = function(){

  var grd = ctx.createLinearGradient(120,0,300,0);
    grd.addColorStop(0, "#990000");
    grd.addColorStop(1, "#f5b9bb");

    var grd2 = ctx.createLinearGradient(150,0,600,0);
    grd2.addColorStop(0,"white");
    grd2.addColorStop(1,"black");

    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = '#080909';
    ctx.fillRect(0,0,WIDTH, HEIGHT);
    ctx.drawImage(guardImg, 90, 0, 30, 30, 258, 220, 30, 30);

    drawText("DEEP", 10, grd, 100, 150);
    drawText("INSIDE", 10, grd2, 250, 200);

    ctx.drawImage(heroImg, 58, ig * 30, 30, 30, localX, 350, 40, 40);
    ctx.drawImage(guardImg, 60, ig * 30, 30, 30, localX + 50, 350, 40, 40);
    ctx.drawImage(heroImg, 88, ig * 30, 30, 30, localX2, 410, 40, 40);
    ctx.drawImage(guardImg, 90, ig * 30, 30, 30, localX2 - 50, 410, 40, 40);

    drawText("Version 1 0 3", 2, 'rgba(255,255,255,0.5)', 520, 620);
    ctx.fillRect(592, 627, 3, 3);
    ctx.fillRect(607, 627, 3, 3);

    if(ig2 == 0){
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fillRect(138, 533, 15,5);
        ctx.fillRect(483, 533, 15,5);
        ctx.fillRect(140, 508, 14,4);
        ctx.fillRect(481, 508, 14,4);
        drawText("Press space to sleep", 4, 'rgba(255,255,255,0.5)', 167, HEIGHT / 3 * 2 + 100);
        drawText("Press m to control audio", 3.225, 'rgba(255,255,255,0.5)', 167, HEIGHT / 3 * 2 + 75);
    }

}

var _describe = function(){

   ctx.clearRect(0, 0, WIDTH, HEIGHT);

   for(var i in description){
    drawText(description[i], 3, '#4BB135', 170, i * 30 + 75);
   }

    drawText("Eat ", 3, '#fffc00', 120, 300);
    ctx.drawImage(foodImg, 0, 0, 20, 20, 162, 298, 20, 20);
    drawText("to gain light and Health point", 3, '#fffc00', 188, 300);

    drawText("Avoid ", 3, '#fffc00', 120, 345);
    ctx.drawImage(guardImg, 60, 0, 30, 30, 190, 335, 30, 30);
    drawText("to survive in your dream ", 3, '#fffc00', 230, 345);

    drawText("move Control", 3, '#FFFFFF', 235, 430);
    drawText("W A S D", 4, '#FFFFFF', 140, 460);
    drawText("or", 3, '#FFFFFF', 288, 465);
    drawText("arrow key", 4, '#FFFFFF', 350, 460);


   if(ig2 == 0){
        drawText("Press space to continue", 4, 'rgba(255,255,255,0.5)', 140, HEIGHT / 3 * 2 + 100);
    }
}

var _over = function(){
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  _scene();
  _time();
  _hp();
  _scene();
  _hero();
  _guard();
  _food();

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  var color = "#66cc33";
  drawText("You have survived " + score + " secs in dreams", 4, color, 20, 200);
  drawText("Best survived: " + parseFloat(historyScore) + " secs", 4, color, 140, 300);

  if(ig2 == 0){
        drawText("Press space to continue", 4, 'rgba(255,255,255,0.5)', 140, HEIGHT / 3 * 2 + 100);
  }

}

var _pause = function(){

  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  drawPlay();

  ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  var color = 'rgba(255,255,255,1)';
  drawText("pause", 8, color, 240, 250);
  drawText("press x to continue", 4, color, 170, 350);

}
