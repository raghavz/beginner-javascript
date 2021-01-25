// JS part of lesson starts at 8:30.

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card'); // look up the DOM to find a card.

  // Grab the image link.
  const imgSrc = card.querySelector('img').src;

  // Grab the image description.
  /*
    We use 'dataset' to get data attributes of HTML elements. e.g. data-description="Wes is cool";
  */
  const desc = card.dataset.description;

  // Add the image and description to the modal box.
}

// Select the buttons of each card.
const cardButtons = document.querySelectorAll('.card button');

cardButtons.forEach(
  button => button.addEventListener('click'),
  handleCardButtonClick
);
