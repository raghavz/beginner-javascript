console.log(`It works !`);

/*eslint-disable*/

const item = document.querySelector('.item');//get an element with class 'item' from a page.
const hColor = 'white';

item.innerHTML = 
`<h1 style="color:${hColor};">
    Element replaced !
</h1>`;//replaces the item element with a h1.


const myHtmlString = `
  <div class="wrapper">
    <h2>Big text</h2>
  </div>
`;

// Turn a string into a DOM element (actually a DocumentFragment).
const myFragment = document.createRange().createContextualFragment(myHtmlString);

//Sample operations on the element.
const myH2 = myFragment.querySelector('h2');
myH2.style = "color:black";

//Add the element to the page.
document.body.appendChild(myFragment);

//Security concerns with innerHTML :

//Say that 'desc' stores the text entered by a user in a particular text field.
let desc = 'Cute pup';//ok.
desc = `Cute pup <h1>Love him</h1> <style>* {display : none;}</style>`;//bad, but not dangerous.
desc = `Cute pup <script>evil_script()</script>`;//dangerous !

const myHTML = `
  <div class="wrapper">
    <h2>Latest comment : ${desc}</h2>
  </div>
`;
