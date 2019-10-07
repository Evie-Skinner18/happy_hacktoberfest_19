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
  document.getElementById("days").innerHTML = "<h1 class='countdown'>"+days+" D"+"<h1>";
  document.getElementById("hours").innerHTML = "<h1 class='countdown'>"+hours+" H"+"<h1>";
  document.getElementById("min").innerHTML = "<h1 class='countdown'>"+minutes+" M"+"<h1>";
  document.getElementById("sec").innerHTML = "<h1 class='countdown'>"+seconds+" S"+"<h1>";

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


// hey neigbour! -------------------------------------------------------------
var canvas_width = 800;
var canvas_height = 200;

var eye1_x = canvas_width/2 - canvas_width/6;
var eye1_y = canvas_height/2;
var eye2_x = canvas_width/2 + canvas_width/6;
var eye2_y = canvas_height/2;
let eye_radius = 20;
let eye1_centerx = eye1_x;
let eye1_centery = eye1_y;
let eye2_centerx = eye2_x;
let eye2_centery = eye2_y;
let eye_speed = 0.2;

var mouth_hiderx = canvas_width / 2;
var mouth_hidery = canvas_height - 80; 
let mouth_hider_speed = 0.3;

var doAnimation = true;
var started = 0;

let message = ["You have a nice place here!", "Can I come in?", "I'm not a stranger! I am your friendly neighborhood cartoon man!", "Am I annoying you?", "Please don't close it!", "Let's chat some more!", "How was your day, neighborinoo?", "You look good today!", "Wow!", "Hey!"];

// start animation
function init()
{
	if(!started)
	{
		var c = document.getElementById('funCanvas');
		c.style.background = "white";
		var ctx = c.getContext('2d');
		chat(ctx);
		doAnimation = true;
		window.requestAnimationFrame(eyes);
		started = 1;
	}
}

function stop()	// stop animation
{
	doAnimation = false;
}

// eyeballs swinging left and right
function swingLeftRight(ctx) 
{
	ctx.beginPath();
	ctx.moveTo(eye1_x, eye1_y);
	ctx.arc(eye1_x, eye1_y, eye_radius, 0, Math.PI*2);
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(eye2_x, eye2_y);
	ctx.arc(eye2_x, eye2_y, eye_radius, 0, Math.PI*2);
	ctx.fill();

	eye1_x += eye_speed;
	eye2_x += eye_speed;
	
	if(eye1_x >= eye1_centerx + 30)
		eye_speed = -eye_speed;
	if(eye1_x <= eye1_centerx - 30)
		eye_speed = -eye_speed;
}

// eyeballs swinging up and down
function swingUpDown(ctx)
{
	ctx.beginPath();
	ctx.moveTo(eye1_x, eye1_y);
	ctx.arc(eye1_x, eye1_y, eye_radius, 0, Math.PI*2);
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(eye2_x, eye2_y);
	ctx.arc(eye2_x, eye2_y, eye_radius, 0, Math.PI*2);
	ctx.fill();


	eye1_y += eye_speed;
	eye2_y += eye_speed;
	
	if(eye1_y >= eye1_centery + 10)
		eye_speed = -eye_speed;
	if(eye1_y <= eye1_centery - 10)
		eye_speed = -eye_speed;
}

// move mouth hider to create illusion of expressions
function changeMouth(ctx)
{
	ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(mouth_hiderx, mouth_hidery, 20, 0, Math.PI*2);
	ctx.fill();
	
	var r = Math.floor(Math.random()*10);
	if(r == 5)
		mouth_hider_speed = -mouth_hider_speed;

	mouth_hidery += mouth_hider_speed;

	if(mouth_hidery >= canvas_height - 45)
		mouth_hider_speed = -mouth_hider_speed;
	if(mouth_hidery <= canvas_height - 80)
		mouth_hider_speed = -mouth_hider_speed;

	ctx.fillStyle = "#000000";
}

function chat(ctx)
{			// print a random message
    var r = Math.floor(Math.random()*10);
	var x = document.getElementById("chat-box");
	x.innerHTML = message[r];
}

function eyes(evt)
{
    var c = document.getElementById('funCanvas');
	c.style.background = "white";
    var ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "lightblue";	// background
	ctx.rect(0, 0, c.width, c.height);
	ctx.fill();

	ctx.fillStyle = "#ffffff";		// head
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, 250, 0, Math.PI*2);
	ctx.fill();
	ctx.stroke();

    ctx.beginPath();	// left eye
    ctx.arc(c.width/2 - c.width/6, c.height/2 + c.height/3, 100, 5*Math.PI/4 - 0.06, 0 - 0.73);
    ctx.arc(c.width/2 - c.width/6, c.height/2 - c.height/3, 100, 0.73, -(5*Math.PI/4 - 0.06));

						// right eye
    ctx.moveTo( c.width/2 + c.width/6 - 73,  c.height/2);
    ctx.arc(c.width/2 + c.width/6, c.height/2 + c.height/3, 100, 5*Math.PI/4 - 0.06, 0 - 0.73);
    ctx.arc(c.width/2 + c.width/6, c.height/2 - c.height/3, 100, 0.73, -(5*Math.PI/4 - 0.06));

	ctx.fill();
    ctx.stroke();

	ctx.fillStyle = "#000000";	// left eyeball
    ctx.beginPath();
    ctx.moveTo(eye1_x, eye1_y);
    ctx.arc(eye1_x, eye1_y, eye_radius, 0, Math.PI*2);
    ctx.fill();

    ctx.beginPath();			// right eyeball
    ctx.moveTo(eye2_x, eye2_y);
    ctx.arc(eye2_x, eye2_y, eye_radius, 0, Math.PI*2);
    ctx.fill();

    ctx.beginPath();			// mouth
    ctx.arc(c.width/2, c.height-40, 20, 0, Math.PI*2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();			// mouth hider
    ctx.arc(mouth_hiderx, mouth_hidery, 20, 0, Math.PI*2);
	ctx.fill();
	
	var r = Math.floor(Math.random()*10);	// random

    ctx.fillStyle = "#000000";	// randomly change eyeball positions
    for(var i =0; i<10; i++)
    	switch(r)
    	{
        	case 1: swingLeftRight(ctx);
            		break;
        	case 2: swingUpDown(ctx);
					break;
			case 3: changeMouth(ctx);
		  }
	if(doAnimation)
		window.requestAnimationFrame(eyes);
	else
	{		// stop animation and close the door
		started = 0;
		var x = document.getElementById("chat-box");
		x.innerHTML = "..";
		ctx.clearRect(0, 0, canvas_width, canvas_height);
		c.style.background = "lightcoral";
	}
}
