/* 
Where to load JavaScript if we are selecting elements on the page ?
Best way - Load the JS before the </body> tag.

Other ways -
- use defer and async.
- we can listen for the `DOMContentLoaded` event and then try to select elements from the page.

 */

// LESSON - The DOM: Selecting elements on the page.
/*
We can select elements with document.querySelector('aSelector') and document.querySelectorAll('aSelector'). The argument we 
pass to these functions is nearly similar to CSS Selectors.

We also have dated/old ways of selecting elements from DOM like getElementById, getElementsByClassName, getElementsByTagName 
getElementsByTagNameNS (NS is namespace) etc.

*/

// querySelector : Returns first match.
const item2 = document.querySelector('.item2'); // .item2 refers to a div with one image & some text.

// querySelectorAll : Returns all matches as a NodeList (like an array but without array helper functions).
const imgs = document.querySelectorAll('.item img'); // .item refers to different kinds of elements, some of which contain images.

// Select something from an element instead of the document object. Can't use this with a NodeList obviously.
const item2Image = item2.querySelector('img');
