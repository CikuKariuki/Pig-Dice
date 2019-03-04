// $(document).ready(function(){
//     $(".p2").hide();
//   });
$(document).ready(function(){


  $("button#start").click(function() {
  var player1=$("input#play1").val();
  var player2=$("input#play2").val();
  $("#1show").text(player1);
  $("#2show").text(player2);
  $(".p1").hide();
  $(".p2").show();

});


// $("button#playbutton").click(function(){
//   var dice=document.getElementById("dice").val();
//   var status=document.getElementById("status").val();
//   var die=Math.floor(Math.random()*6) +1)
//
//   dice.innerHTML=die;
// })
});
