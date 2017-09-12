var step = [starter, play, over];

var flow = {
 status : step,
 play : function(num){
     step[num]();
 }
}

//start page
var starter = function (){
  drawStarter();
}

//description page
var describe = function (){
  drawDescribe();
}

//main page
var play = function (){
 if (newGame == true){
   init();
   newGame = !newGame;
 }
 update();
 drawPlay();
}

//gameover page
var over = function(){
 getScore();
 drawOver();

}

var pause = function(){
  drawPause();
}

var getScore = function(){
 if (localStorage.getItem("deepInside.score")){
   historyScore = localStorage.getItem("deepInside.score");
   if (historyScore < score) {
     historyScore = score;
     localStorage.setItem("deepInside.score", historyScore);
   }
 }else{
   historyScore = score;
   localStorage.setItem("deepInside.score", historyScore);
 }
}
