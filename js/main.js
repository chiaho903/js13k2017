//start a game
var game = function(){
    if (s == 0){
      starter();
    }else if (s == 1){
      describe();
    }else if (s == 2){
      play();
    }else if (s == 3){
      over();
    }else if (s == 4){
      pause();
    }
    requestAnimationFrame(game);
}

window.onload = function(){
    game();
    onresize();
    bgAudio();

    //for the picture animate
    setInterval(function(){
      ig ++;
      if(ig > 1)ig = 0;
    }, 300);

    //Flash for the Text
    setInterval(function(){
      ig2 ++;
      if(ig2 >1) ig2 =0;
    }, 550);

    //control the tittle page's animate;
    setInterval(function(){
        if(localX < -860){
          localX = 700;
          localX2 = -900;
        }else{
          localX -= 20;
          localX2 += 20;
        }

      }, 300);

  }


//score stops when user leaves the game page

  window.onblur = function (){
    if(s == 2){
      sTemp = s;
      s = 4;
      clearInterval(setFocus);
      focus = false;
    }
  }
