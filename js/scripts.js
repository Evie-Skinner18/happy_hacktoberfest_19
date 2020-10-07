// var countDownDate = new Date("Oct 31, 2020 23:59:59").getTime();
const year = new Date().getFullYear();
// update the year dynamically in the index.html
const currentYear = document.querySelectorAll(".currentYear");
currentYear.forEach((span) => {
  span.textContent = year;
});
const copy = document.querySelector("#copy");

currentYear.textContent = "12";
const deadlineDate = new Date(year, 9, 31, 23, 59, 59);

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = deadlineDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display counter
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minElement = document.getElementById("min");
  const secElement = document.getElementById("sec");
  daysElement.textContent = `${days}`;
  hoursElement.textContent = `${hours}`;
  minElement.textContent = `${minutes}`;
  secElement.textContent = `${seconds}`;

  // If the count down is over, show the message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML =
      "<h2 class='display-1 font-weight-bold'>End Hacking 2019!</h2>";
  }
}, 1000);

//Something funky
//Made this on my break with no real idea/result in mind, I think its a fun little animation.
//Please feel free to optimize code!

//Get content from element and split every character into array
const funky = document.querySelector(".Hacktoberfest");
const content_array = funky.innerHTML.split("");
funky.innerHTML = "";

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
  if (c < content_array.length && up == true) {
    funky.innerHTML += content_array[c];
    c++;
  } else if (c == content_array.length) {
    up = false;
  }

  if (up == false) {
    if (funky.innerHTML.length > 0) {
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
  const colors = [
    "violet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];
  let random = Math.floor(Math.random() * colors.length + 1);
  funky.style.color = colors[random];
}
