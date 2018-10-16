
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

//initializing a starting point for my ball
let x = canvas.width / 2;
let y = canvas.height - 60;
//making the ball move
let moveX = 2;
let moveY = -2;

const ballRadius = 10;

//initializing the paddle
const paddleHeight = 15;
const paddleWidth = 115;
let paddleX = (canvas.width - paddleWidth) / 2;

//making the paddle move;
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}


//function that draws my ball
function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
}

//function that draws my paddle
function drawPaddle() {
    context.beginPath();
    context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
}


function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height); //clears the canvas
    drawBall();
    drawPaddle();


    if (x + moveX > canvas.width - ballRadius || x + moveX < ballRadius) { //checking if ball hits right and left wall, reverse direction
        moveX = -moveX;
    }

    if (y + moveY < ballRadius) { //checking if ball hits top
        moveY = -moveY;
    } else if (y + moveY == canvas.height - ballRadius) { //checking if the ball hits the bottom of the canvas
        if (x > paddleX && x < paddleX + paddleWidth) { //checking if the ball hits the paddle
            moveY = -moveY;
        } else {
            alert("GAME OVER")
            document.location.reload();
        }
    }

    if (rightPressed && paddleX <= canvas.width - paddleWidth) {
        paddleX += 9;
    }
    if (leftPressed && paddleX >= 0) {
        paddleX -= 9;
    }

    x += moveX;
    y += moveY; //making the ball move

}
setInterval(draw, 8);

// x > paddleX && x < paddleX + paddleWidth