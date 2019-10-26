let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  ctx.fillStyle="green";
  ctx.fillRect(0,0,1000,1600);

  ctx.fillStyle="grey";
  ctx.fillRect(100,0,800,1600);

  ctx.fillStyle="white";
  ctx.fillRect(120,0,760,1600);

  ctx.fillStyle="grey";
  ctx.fillRect(150,0,700,1600);

  ctx.beginPath();
  ctx.setLineDash([70, 40]);
  ctx.lineDashOffset = 20;
  ctx.lineWidth = 20;
  ctx.strokeStyle = "white";
  ctx.moveTo(500,0);
  ctx.lineTo(500, 1600);
  ctx.stroke();


  //
  // Iteration 2: car drawing
  //
  car.draw()
  // 

  //
  // Iteration #4: obstacles
  //
  
  // TODO
  
  //voiture.drawImage(this.img, x, y)


  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;

  switch (e.keyCode) {
    case 37 :
      car.moveLeft();
      break;
    case 39 :
      car.moveRight();
      break;
  }
}

let frames = 0;
function animLoop() {
  frames++;

  draw();
  
  if (!gameover) {
    requestAnimationFrame(animLoop);
  }
}

function startGame() {
  car = new Car;

  requestAnimationFrame(animLoop);
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();