console.log('It works !');

// NOTE - Its better to avoid using global scoped variables in general.

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

function global4() {
    return 'Global Function.';
}

console.log(`Generated from js script : ${window.global4()}`);//The 'window' part is not needed.


//Function can access global variables, but global objects cannot access its local variables.
const item1 = 10;
function myFunction1() {
    const item1 = 50;//item1 local will shadow item1 global. But shadowing is bad.
    console.log(`A function can access global variables like : ${global2}`);
    //console.log(`${item1}`);//will be 50 and not 10.
}
myFunction1();


//Scoping rules for Let, Var, Const variables.
/*Var are function scoped, whereas Let and Const are block scoped.*/
function praiseThem(name) {
    if (name === 'wes') {
        var nice = true;//available everywhere in this function.
        let praise = 'He is the nicest !';//available only in the if block.
    }
    console.log(`Is ${name} nice : ${nice} ?`);// Works !
    //console.log(`${praise}`);// Fails ! Uncaught ReferenceError: praise is not defined.
}
praiseThem('wes');


//Scoping rules for functions.
/*Functions are block scoped, just like Let & Const variables.*/
function sayHi(name) {
    function yell() {
        console.log(name.toUpperCase());
    }
}
//yell(); Fails ! Uncaught ReferenceError: yell is not defined.

