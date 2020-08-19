console.log('It works !');

/*
NOTE - Its better to avoid using global scoped variables in general.
*/

// First, we disable the eslint plugin for VS code for this example.
/*eslint-disable*/

//Global variables, constants and functions :

const global1 = 'Global const.';
let global2 = 'Global variable 1.';
var global3 = 'Global variable 2.';

/* Here window refers to the browser's window object. Every global function or variable, except const's and let's are 
attached to the window object. */
console.log(window.global1); // undefined.
console.log(window.global2); // undefined.
console.log(window.global3); // Global variable 2.

function global4(){
    return 'Global Function.';
}

console.log(`Generated from js script : ${window.global4()}`);//The 'window' part is not needed.

//Function can access global variables, but global objects cannot access its local variables.
const item1 = 10;
function myFunction1(){
    const item1 = 50;//item1 local will shadow item1 global. But shadowing is bad.
    console.log(`A function can access global variables like : ${global2}`);
    //console.log(`${item1}`);//will be 50 and not 10.
}
myFunction1();
