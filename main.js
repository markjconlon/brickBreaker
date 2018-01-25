document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let xSpeed = 6;
  let ySpeed = 5;
  let ballX = 350;
  let ballY = 500;
  // let ballXA = 5;
  // let ballYA = 5;
  const paddleWidth = 75;
  const paddleHeight = 10;
  let paddleX = canvas.width/2 - paddleWidth/2;
  let paddleY = canvas.height-10;
  let bricks = [];

  document.addEventListener("keydown", function(e){
    if (e.keyCode === 37) {
      if (paddleX > 0) {
        paddleX -= 8;
      }
    } else if (e.keyCode === 39) {
      if (paddleX < canvas.width - paddleWidth) {
        paddleX += 8;
      }
    }
  });

  function draw(){
    // board
    drawRect(0,0,canvas.width,canvas.height,"blue");

    // ball
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0,Math.PI*2, true);
    ctx.fill();

    // paddle
    drawRect(paddleX,paddleY,paddleWidth,paddleHeight,"white");
    bricks.forEach(function(brick){
      drawRect(brick.brickName.x, brick.brickName.y, brick.brickName.width, brick.brickName.height, brick.brickName.color);
    });
  }

  function drawRect(x, y, width, height, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  function generateBricks(){
    for (var i = 0; i < 8; i++) {
      let spacing = 50;
      if (i === 0) {
        let brick = {brickName: {color: "red", x: 2*spacing, y: 50, width: 40, height: 30}}
        bricks.push(brick);
      } else {
        let brick = {brickName: {color: "red", x: 2*(i+1)*spacing, y: 50, width: 40, height: 30}}
        bricks.push(brick);
      }
    }
  }

  function start(){
    generateBricks();
    setInterval(function () {
      draw();
      move();
    }, 1000/30);
  }

  function move(){
    if (ballX > canvas.width || ballX < 0) {
      xSpeed = -1 * xSpeed
    } else if (ballY > canvas.height || ballY < 0) {
      ySpeed = -1 * ySpeed
    }
    ballX += xSpeed;
    ballY += ySpeed;
  }
  start();
});
