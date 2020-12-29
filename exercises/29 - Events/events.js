const buttons = document.querySelector('.buttons');

function handleClick(event) {
  console.log('It got clicked!');
  console.log(event.target);
  console.log(event.currentTarget);
}

buttons.addEventListener('click', handleClick);

/*
function handleWindowClick(event) {
  console.log('Window got clicked!');
  console.log(event.target);
  console.log(event.currentTarget);
}

window.addEventListener('click', handleWindowClick, { capture: true });
*/
