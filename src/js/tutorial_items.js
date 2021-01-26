const canvas = document.getElementById('items_canvas');
const context = canvas.getContext('2d');

console.log(canvas);

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// position
let x = 0;
let y = 0;

// velocity;
let vx = 2;
let vy = 2;

// acceleration
const ax = - 0.009;
const ay = 0.2;

// animate
function animate() {
  // clear canvas
  context.clearRect(0, 0, width, height);

  //draw rectangle
  context.fillRect(x, y, 20, 20);

  // udpate velocity based in acceleration
  vx += ax;
  vy += ay;

  // update position with velocity
  x += vx;
  y += vy;

  requestAnimationFrame(animate);

  if (y > height || x > width) {
    x = 0;
    y = 0;
    vx = 2;
    vy = 2;
  }
}

animate();
