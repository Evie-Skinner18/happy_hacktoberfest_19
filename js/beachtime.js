document.addEventListener('DOMContentLoaded', function() {
    var instructions = "Welcome to BeachTime, THE immersive online experience!\n\n";
    instructions += "Use the arrow keys/WASD to move your player. Bask in sunlight ";
    instructions += "and most importantly, enjoy."

    alert(instructions);
});

document.getElementById("playerCanvas").setAttribute("width", window.innerWidth);

window.addEventListener("resize", function() {
    document.getElementById("playerCanvas").setAttribute("width", window.innerWidth);
});

// INIT
var canvas = document.getElementById("playerCanvas");
var ctx = canvas.getContext("2d");
var playerHeight = 150;
var playerWidth = 125;
var speed = 15;
var playerX = (canvas.width - playerWidth) / 2;
var playerY = (canvas.height - playerHeight) / 2;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var img = new Image();
img.src = "img/btplayer.png";
var initialFacePositioning = true;
// KEYBOARD
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if ("code" in e) {
        switch(e.code) {
            case "Unidentified":
                break;
            case "ArrowRight":
            case "Right": // IE <= 9 and FF <= 36
            case "KeyD":
                rightPressed = true;
                return;
            case "ArrowLeft":
            case "Left": // IE <= 9 and FF <= 36
            case "KeyA":
                leftPressed = true;
                return;
            /*case "ArrowUp":
            case "Up": // IE <= 9 and FF <= 36
            case "KeyW":
                upPressed = true;
                return;
            case "ArrowDown":
            case "Down": // IE <= 9 and FF <= 36
            case "KeyS":
                downPressed = true;
                return;*/
            default:
                return;
        }
    }
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    /*if(e.keyCode == 40) {
        downPressed = true;
    }
    else if(e.keyCode == 38) {
        upPressed = true;
    }*/
}
function keyUpHandler(e) {
    if ("code" in e) {
        switch(e.code) {
            case "Unidentified":
                break;
            case "ArrowRight":
            case "Right": // IE <= 9 and FF <= 36
            case "KeyD":
                rightPressed = false;
                return;
            case "ArrowLeft":
            case "Left": // IE <= 9 and FF <= 36
            case "KeyA":
                leftPressed = false;
                return;
            /*case "ArrowUp":
            case "Up": // IE <= 9 and FF <= 36
            case "KeyW":
                upPressed = false;
                return;
            case "ArrowDown":
            case "Down": // IE <= 9 and FF <= 36
            case "KeyS":
                downPressed = false;
                return;*/
            default:
                return;
        }
    }
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    /*if(e.keyCode == 40) {
        downPressed = false;
    }
    else if(e.keyCode == 38) {
        upPressed = false;
    }*/
}
// LEAP MOTION
var toDegrees = 1 / (Math.PI / 180);
var horizontalDegree = 0;
var verticalDegree = 0;
var degreeThreshold = 30;
var grabStrength = 0;
Leap.loop({
    hand: function(hand) {
        horizontalDegree = Math.round(hand.roll() * toDegrees);
        verticalDegree = Math.round(hand.pitch() * toDegrees);
        grabStrength = hand.grabStrength;
        output.innerHTML = "Leap Motion:  <br />"
            + " roll: " + horizontalDegree + "° <br />"
            + " pitch: " + verticalDegree + "° <br />"
            + " strength: " + grabStrength;
    }
});
// DRAW
var prevPos = playerX + playerY;
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // KEYBOARD
    if(rightPressed) {
        if(playerX < window.innerWidth - 50) playerX += speed;
    }
    else if(leftPressed) {
        if(playerX >= 0) playerX -= speed;
    }
    if(downPressed) {
        playerY += speed;
    }
    else if(upPressed) {
        playerY -= speed;
    }
    // LEAP MOTION
    if(horizontalDegree > degreeThreshold) {
        playerX -= speed;
    }
    else if(horizontalDegree < -degreeThreshold) {
        playerX += speed;
    }
    if(verticalDegree > degreeThreshold) {
        playerY += speed;
    }
    else if(verticalDegree < -degreeThreshold) {
        playerY -= speed;
    }
    if(grabStrength == 1) {
        alert('BOOM!');
    }

    if(prevPos != playerX + playerY || initialFacePositioning) { //if yes, player is in a new position
        if(initialFacePositioning) initialFacePositioning = false;

        var sunWidth = document.querySelector(".sun-4").clientWidth - 100; //100px padding to keep face from moving too far
        var windowWidth = window.innerWidth;
        
        document.getElementById("face").style.marginLeft = (playerX * sunWidth / windowWidth) + "px";
        prevPos = playerX + playerY;
    }

    ctx.drawImage(img, playerX, playerY);
    requestAnimationFrame(draw);
}
draw();