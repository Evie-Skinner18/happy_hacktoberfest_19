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
  document.getElementById("days").innerHTML = "<h2 class='display-1 font-weight-bold'>"+days+"<h2>";
  document.getElementById("hours").innerHTML = "<h2 class='display-1 font-weight-bold'>"+hours+"<h2>";
  document.getElementById("min").innerHTML = "<h2 class='display-1 font-weight-bold'>"+minutes+"<h2>";
  document.getElementById("sec").innerHTML = "<h2 class='display-1 font-weight-bold'>"+seconds+"<h2>";

// If the count down is over, show the message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "<h2 class='display-1 font-weight-bold'>End Hacking 2019!</h2>";
  }
}, 1000);
