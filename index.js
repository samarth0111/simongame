var question = [];
var answer =[];
var colours = ["red" , "green" ,"yellow" , "blue"];
var level=0;
var game = true;



$(".startbtn").click(function(){
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
  $(".startbtn").addClass("Startbtn_visibility");
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
  var i=0;
  if(answer.length===1){
    i=0;
  }else{
    i=answer.length -1;
  }
  for(var k = i ; k<answer.length ; k++){
    if(answer[k]===question[k]){
      if(answer.length===question.length ){ // trace full logic of checkAnswer then only u will get it.
        level++;
        startgame();
      }

    }else{
      game=true;
      $(".startbtn").text("Restart");
      $(".startbtn").removeClass("Startbtn_visibility");
      wrong();

    }

   }

}

function wrong(){
  $("h1").text(" GAME OVER. press to restart !");
  $("body").addClass("wrong");
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
}
