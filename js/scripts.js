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

//Something funky
//Made this on my break with no real idea/result in mind, I think its a fun little animation.
//Please feel free to optimize code!

//Get content from element and split every character into array
const funky = document.querySelector('.Hacktoberfest');
const content_array = funky.innerHTML.split('');
funky.innerHTML = '';

let c = 0;
let b = content_array.length;
let up = true;

window.setInterval(() => {
  somethingFunky();
}, 100);

/**
 * Go from start to end of array and print characters, and vice versa.
 */
function somethingFunky() {
  if(c < content_array.length && up == true) {
    funky.innerHTML += content_array[c];
    c++
  } else if (c == content_array.length) {
    up = false;
  }

  if(up == false) {
    if(funky.innerHTML.length > 0) {
      funky.innerHTML = funky.innerHTML.slice(0, -1);
    } else {
      up = true;
      c = 0;
    }
  }
  randomColor();
}

/**
 * Change the element's text to a random color
 */
function randomColor() {
  const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
  let random = Math.floor((Math.random() * colors.length) + 1);
  funky.style.color = colors[random];
}