// Grab the terms and conditions popup.
const terms = document.querySelector('.terms-and-conditions');

// Get the last element (i.e. HR tag) in popup. We will use it to find if user scrolled to the bottom.
const hrElement = terms.lastElementChild;

// Get the Accept button.
const button = document.querySelector('.accept');

// Function to call when the user scrolled to the bottom of popup.
function obCallback(payload) {
  const isHrElementFullyVisible = payload[0].intersectionRatio === 1;

  if (isHrElementFullyVisible) {
    button.disabled = false; // Allow the button to be clicked.
    observer.unobserve(hrElement); // Stop observing the HR element.
  }
}

// Create an observer which enables us to find out if an element is visible on the screen.
const observer = new IntersectionObserver(obCallback, {
  root: terms, // Root of the element in which we are scrolling.
  threshold: 1, // Let us know when a desired element (HR tag) is 100% (1 = 100%) visible on the page.
});

// Observe the hrElement.
observer.observe(hrElement);
