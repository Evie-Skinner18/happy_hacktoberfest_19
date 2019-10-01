var countDownDate = new Date("Oct 31, 2019 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
  var now = new Date().getTime();

// Find the distance between now and the count down date
  var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display info
  document.getElementById("days").innerHTML = "<h1>"+days+"<h1>";
  document.getElementById("hours").innerHTML = "<h1>"+hours+"<h1>";
  document.getElementById("min").innerHTML = "<h1>"+minutes+"<h1>";
  document.getElementById("sec").innerHTML = "<h1>"+seconds+"<h1>";

// If the count down is over, show the message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "<h1>End Hacking 2019!</h1>";
  }
}, 1000);
