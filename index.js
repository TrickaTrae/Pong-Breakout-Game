
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

//initializing a starting point for my ball
let x = canvas.width / 2;
let y = canvas.height - 60;
//making the ball move
let moveX = 2;
let moveY = -2;

const ballRadius = 10;


//function that draws my ball
const drawCircle = () => {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
}

const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height); //clears the canvas
    drawCircle();
    x += moveX;
    y += moveY; //making the ball move

    if (x + moveX > canvas.width - ballRadius || x + moveX < ballRadius) { //checking if the ball hits right and left wall, reverse direction
        moveX = -moveX;
    }
    if (y + moveY > canvas.height - ballRadius || y + moveY < ballRadius) { //checking if the ball hits top and bottom wall, reverse direction
        moveY = -moveY;
    }

}
setInterval(draw, 8);


