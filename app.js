

var countDownDate = new Date ("Dec 30, 2023 00:00:00").getTime();
var x = setInterval(function (){
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
  var mintues = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
},1000)