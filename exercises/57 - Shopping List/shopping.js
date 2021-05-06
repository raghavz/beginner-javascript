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

/*
This displays all the items in the list. The disadvantage of this code as of 38:30 is that it will recreate 
the entire list on the page when you add a new item.
*/
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

// This copies list items to the browser's local storage.
// Note - local storage is text only i.e. no concept of objects and such.
function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

// This loads the list back from local storage. We can use it to restore list when user reloads the page.
function restoreFromLocalStorage() {
  // Pull items from local storage.
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    lsItems.forEach(item => items.push(item));
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

restoreFromLocalStorage();

// Stopped at 42:40
// How to fix the shortcoming of function displayItems().
