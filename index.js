var question = [];
var answer =[];
var colours = ["red" , "green" ,"yellow" , "blue"];
var level=0;
var game = true;


$(document).keypress(function(){

  if(game){
    game=false;
    $("body").removeClass("wrong");
    question = [];
    level=0;
    startgame();
  }

});

$(".btn").click(function(){
  var ans_btn_colour = $(this).attr("class");
  var ans_newColour = ans_btn_colour.slice(4);
  buttonAct(ans_newColour);
  answer.push(ans_newColour);
  checkAnswer();

});



function startgame(){
  answer=[];

  setTimeout(function(){
    $("h1").text("Level "+(level+1));
    var ques_colour = colours[randomNumbers()];
    buttonAct(ques_colour);
    question.push(ques_colour);
  },500);

}



function randomNumbers(){
  var randNum = Math.floor(Math.random()*4);
  return randNum;

}

function buttonAct(colour){
  $("."+colour).addClass("bgeffect");
  setTimeout(function(){
    $("."+colour).removeClass("bgeffect");
  },200);
  var audio = new Audio("sounds/"+colour+".mp3");
  audio.play();

}

function checkAnswer(){
  for(var i = 0 ; i<answer.length ; i++){
    if(answer[i]===question[i]){
      if(answer.length===question.length){
        level++;
        startgame();
      }

    }else{
      game=true;
      wrong();

    }

   }

}

function wrong(){
  $("h1").text(" GAME OVER......press A key to restart!!!");
  $("body").addClass("wrong");
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
}
