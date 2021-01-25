// JS part of lesson starts at 8:30.

// Grab the modal box/popup (which is normally hidden.)
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card'); // look up the DOM to find a card.
  const name = card.querySelector('h2').textContent;

  // Grab the image link.
  const imgSrc = card.querySelector('img').src;

  // Grab the image description.
  /*
    We use 'dataset' to get data attributes of HTML elements. e.g. data-description="Wes is cool";
  */
  const desc = card.dataset.description;

  // Add the image and description to the modal box.
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
  `;

  // Show the modal.
  modalOuter.classList.add('open');
}

// Select the buttons of each card.
const cardButtons = document.querySelectorAll('.card button');

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);
