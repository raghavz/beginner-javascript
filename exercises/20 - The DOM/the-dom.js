/*eslint-disable*/

/* 
Where to load JavaScript if we are selecting elements on the page ?
Best way - Load the JS before the </body> tag.

Other ways -
- use defer and async.
- we can listen for the `DOMContentLoaded` event and then try to select elements from the page.
 */

// LESSON 21 - The DOM - Selecting elements on the page.

/*
We can select elements with document.querySelector('aSelector') and document.querySelectorAll('aSelector'). The argument we 
pass to these functions is nearly similar to CSS Selectors.

We also have older ways to select elements from DOM like getElementById, getElementsByClassName, getElementsByTagName 
getElementsByTagNameNS (NS is namespace) etc. We can still use these.

*/

// querySelector : Returns first match.
const item2 = document.querySelector('.item2'); // .item2 refers to a div with one image & some text.

// querySelectorAll : Returns all matches as a NodeList (like an array but without array helper functions).
const imgs = document.querySelectorAll('.item img'); // .item refers to different kinds of elements, some of which contain images.

// Select something from an element instead of the document object. Can't use this with a NodeList obviously.
const item2Image = item2.querySelector('img');

// LESSON 22 - The DOM - Element Properties and Methods.

const heading = document.querySelector('h2'); // select the 1st h2 in the dom.

// Console.dir(...) Shows us the properties of an object such as parentElement, textContent, innerText etc.
console.dir(`console.dir(...) demo :\n${heading}`);

//textContent vs innerText.
console.log(`textContent demo :\n${heading.textContent}`);
console.log(`innerText demo :\n${heading.innerText}`);

// Getting & Setting the property of an element.
const oldHeading = heading.textContent;
//heading.textContent = 'New text for heading !';

//innerHtml
console.log(`innerHtml demo :\n${heading.innerHTML}`);

//outerHtml
console.log(`innerHtml demo :\n${heading.outerHTML}`);

//Adding text at the end of an element : textContent VS insertAdjacentText.
const pizzaList = document.querySelector('.pizza');
pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('beforeend', '🍕');


// LESSON 23 - The DOM - Working with Classes.

const pic = document.querySelector('.nice');
pic.classList.add('open');
console.log('classList of an element :\n');
console.log(pic.classList);


// LESSON 24 - The DOM - Built in and Custom Data Attributes.

//Built-in attributes :
pic.alt = 'My alt text.';//Setter.
console.log(`changed alt attribute of element to :\n${pic.alt}`);//Getter.

//Alternatively, using getter and setter methods.
pic.getAttribute('alt');
pic.setAttribute('alt', 'Nice image.');

//Custom attributes :

//Creating custom attributes - Good approach ! Uses 'data-' prefix in name of custom attribute.
pic.setAttribute('data-my-attrib', 'cool-stuff');

//Accessing custom attributes.
const custom = document.querySelector('.custom');
console.log(custom.dataset);
console.log(`Value of the custom attribute 'data-name' : ${custom.dataset.name}`);
