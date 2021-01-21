// select relevant elements on the page - canvas & shake button.
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // ctx is context.

const shakeButton = document.querySelector('.shake');

// setup the canvas for drawing:

const { width, height } = canvas; // same as width = canvas.width, followed by height = canvas.height;

// create random x,y coordinates for the starting dot on the canvas.
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

// specify the kind of brush for drawing.
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// start the drawing.
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write an event handler for pressing of arrow keys to draw.
function handleKey(event) {
  /*
    Default behavior - When arrow key is pressed, then scroll the page.
    Instead of scrolling, we want to draw on the canvas when an arrow key is pressed.
    */
  const isAnArrowKeyPressed = event.key.includes('Arrow');
  if (isAnArrowKeyPressed === true) {
    event.preventDefault();
  }
}

// listen to pressing of arrow keys. They are used to move the brush.
window.addEventListener('keydown', handleKey); // Listen to events for entire website & not just the canvas.
