// select relevant elements on the page - canvas & shake button.
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // ctx is context.

const shakeButton = document.querySelector('.shake');

// setup the canvas for drawing:

const { width, height } = canvas; // same as width = canvas.width, followed by height = canvas.height;

// create random position for the starting dot on the canvas.
/*
NOTE - Here, x & y are cartesian coordinates in the canvas. The origin (0,0) for a HTML canvas is the 
upper left corner, unlike normal graphs where the origin is at the bottom left corner.
*/
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// specify the coloring used for drawing.
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// specify the kind of brush for drawing.
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// start the drawing.
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

const MOVE_AMOUNT = 10; // Length of line to draw when an arrow key is pressed once.

// write a draw function.
function draw(options) {
  // change the current color of the brush.
  hue += 10; // a bigger count changes the color even more than previous color.
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  // start the drawing.
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (options.key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;

    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;

    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;

    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;

    default:
      break;
  }

  // draw a line based on where the user moved the brush.
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write an event handler for pressing of arrow keys to draw.
function handleKey(event) {
  /*
    Default behavior - When arrow key is pressed, then scroll the page.
    Instead of scrolling, we want to draw on the canvas when an arrow key is pressed.
    */
  const isAnArrowKeyPressed = event.key.includes('Arrow');
  if (isAnArrowKeyPressed === true) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

// listen to pressing of arrow keys. They are used to move the brush.
window.addEventListener('keydown', handleKey); // Listen to events for entire website & not just the canvas.

// Shake function to clear the canvas.
function clearCanvas() {
  // console.log('done the shake');

  // adding shake class so that our CSS code shakes the canvas.
  canvas.classList.add('shake');

  // clear the canvas.
  ctx.clearRect(0, 0, width, height);

  // wait till the end of the current shake & then stop the shaking.
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    /* 
      The "once: true" argument unbinds this listener after stopping the shaking. Otherwise, this function 
      will add a new copy of this event listener everytime we press the shake button, which is useless. 
     */
    { once: true }
  );
}

// make the shake button clear the canvas.
shakeButton.addEventListener('click', clearCanvas);
