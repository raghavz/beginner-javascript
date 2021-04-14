const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Store all items in list.
const items = [];

// Handler for the "add item" button.
function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;

  // If the item text field is empty, then don't submit/accept it.
  if (!name) return;

  // Store the state of the item.
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  // Save the state of the item.
  items.push(item);

  // Clear the form.
  e.target.reset();

  /* Dispatch/trigger a custom event to show that all the items (i.e. item states) have been updated. This 
  will decouple handleSubmit() from other things like displayItems(), doSomething(), doAnotherThing() etc.
  */
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}">&times;</button>
      </li>`
    )
    .join('');
  list.innerHTML = html;
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
