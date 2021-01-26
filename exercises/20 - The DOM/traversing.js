console.log('It works!');

const wes = document.querySelector('.wes');

// These properties return an Element.
console.log(wes.children);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

// These properties return a Node.
console.log(wes.childNodes);
console.log(wes.firstChild);
console.log(wes.lastChild);
console.log(wes.previousSibling);
console.log(wes.nextSibling);
console.log(wes.parentNode);

// Removing an element which we added to the DOM.
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
