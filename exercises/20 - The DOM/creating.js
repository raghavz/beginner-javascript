console.log('It works !');

/*eslint-disable*/

//Creating an element :

const myParagraph = document.createElement('p');//Can't add attributes in this step itself.
//Adding/setting attributes for the created element.
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

//Adding an element to the dom :
/*
Every addition to the page causes a browser reflow. More reflows is bad user experience. So, try to add elements in 
as few attempts as possible. First build your element structure/tree and then add the entire tree to the page instead
of adding each element in the tree one by one.
*/

//Using Node.appendChild.

//GOOD sequence ! We cause only 1 browser reflow !
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);//Read note below.

document.body.appendChild(myDiv);//Causes a reflow !


//Using Element.insertAdjacentElement.
const heading = document.createElement('h2');
heading.textContent = 'Cool things';

document.body.insertAdjacentElement('beforebegin', heading);

//Misc : You can use Element.cloneNode(true) to clone an element.
