onkeydown = function(e){
    code = e.keyCode;
    //top
    if(code == 38  || code == 87){
        keys[code] = true;
    }

    //down
    if(code == 40 || code == 83){
        keys[code] = true;
    }

    //left
    if(code == 37 || code == 65){
        keys[code] = true;
    }

    //right
    if(code == 39 || code == 68){
        keys[code] = true;
    }

    //space
    if (code == 32 || code == 120){
      if (s == 0 || s ==1){
        s++;
        spaceAudio();
      }
      if (s == 3){
        localX = 700;
        localX2 = -900;
        s = 0;
      }
    }

    //x , X
    if (code == 88 || code == 120){
        if(s == 4){
            s = sTemp;
            focus = true;
        }
    }

    //m, M
    if (code == 77 || code == 109){
      mute = !mute;
      bgAudio();
    }
}

onkeyup = function(e){
    code = e.keyCode;
    //top
    if(code == 38  || code == 87){
        keys[code] = false;
    }

    //down
    if(code == 40 || code == 83){
        keys[code] = false;
    }

    //left
    if(code == 37 || code == 65){
        keys[code] = false;
    }

    //right
    if(code == 39 || code == 68){
        keys[code] = false;
    }
}
