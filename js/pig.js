$("document").ready(function(){
    $(".p2").hide();
  })

  function Players(name){
    this.name=name;
  }
  var start = function () {
  var player1=$("#play1").val();
  var player2=$("#play2").val();
  var playOne= new Player(player1);
  var playTwo= new Player(player2);
  $(".p1").hide();
  $(".p2").show();

  // if(player1 && player2){
  //   console.log(player1,player2)
  //   $("#play1").text(playOne);
  //   $("#play2").text(playTwo);

  // }else{alert ("Please Enter Player Name")}
}


// $("button#playbutton").click(function(){
//   var dice=document.getElementById("dice").val();
//   var status=document.getElementById("status").val();
//   var die=Math.floor(Math.random()*6) +1)
//
//   dice.innerHTML=die;
// })
