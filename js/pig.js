//User logic
$(document).ready(function(){


  $("button#start").click(function() {
  var player1=$("input#play1").val();
  var player2=$("input#play2").val();
  $("#1show").text(player1);
  $("#2show").text(player2);
  $(".p1").hide();
  $(".p2").show();
});
$("#hold1").click(function(){
    turnChange();

});
$("#hold2").click(function(){
  turnChange();

});
});

//Business logic
function randomNum(){
return Math.floor(Math.random ()*6)+1;
}

var inScore = 0;
  function trial1(){
   var random=randomNum();
   document.getElementById("game1").innerHTML=random;
   var finalScore = inScore += random;
   if (random===1){
     finalScore=0;
     turnChange();
   }
   if(finalScore>99){
     alert("We have a WINNER!!")
   }
    document.getElementById('score1').innerHTML=finalScore;

  }

 var firstScore=0;
 function trial2(){
   var random=randomNum();
   document.getElementById("game2").innerHTML=random;
   var finalScore = firstScore += random;
   if (random===1){
     finalScore=0;
     turnChange();
   }
   if(finalScore>99){
     alert("We have a WINNER!!")
   }
     document.getElementById('score2').innerHTML=finalScore;

 }

 //User logic
 function turnChange(){
   $("#playbutton1").toggle();
   $("#hold1").toggle();
   $("#playbutton2").toggle();
   $("#hold2").toggle();
 }
