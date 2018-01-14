document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let xSpeed = 5;
  let ySpeed = 5;
  let ballX = 350;
  let ballY = 500;
  // let ballXA = 5;
  // let ballYA = 5;

  function draw(){
    // board
    ctx.fillStyle = "blue";

    // ball
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0,Math.PI*2, true);
    ctx.fill();
  }

  function drawRect(){
  }

  function start(){
    setInterval(function () {
      draw();
      move();
    }, 1000/30);
  }

  function move(){
    ballX += xSpeed;
    ballY += ySpeed;
  }
  start();
});
