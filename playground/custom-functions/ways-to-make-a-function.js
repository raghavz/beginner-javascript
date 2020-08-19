// The message should appear in browser console (browser can be opened via Live Server plugin for VS code).
console.log('This js file works!'); // Open index.html to check if it can run this js script.

// ***WAYS TO MAKE A FUNCTION :***

// FUNCTION_1 : With function declaration.

// console.log(`Function declaration 1 : ${doctorize('James')} `); // Function call before function declaration - It works !
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}
// console.log(`Function declaration 2 : ${doctorize('James')} `); // Function call after function declaration - It works !

// FUNCTION_2 : With function expression.
/* Note : These are not hoisted ("refer - function hoisting"). Hence, you can't use such functions before they are declared. */

// doctorizeFn('John'); // It fails ! Uncaught ReferenceError: Cannot access 'doctorizeFn' before initialization.
const doctorizeFn = function(firstName) {
  return `Dr. ${firstName}`;
};
// doctorizeFn('John'); // It works !

/* FUNCTION_3 : Anonymous function - A function with no name. These are used in callbacks and IIFE: immediately invoked function 
expressions. Read further */

// FUNCTION_4 : IIFE: immediately invoked function expressions.
/* These can be used in closures (coming soon) */
(function(age) {
  return `You are cool and age ${age}`;
})(10); // The (10) at the end shows that we call this function (just after declaring it).

// FUNCTION_5 : Callback functions.
/* We'll first show some silly examples for callback functions. After that, we show a more realistic example. */

function greeter1(name, callbackFunction) {
  console.log(`${callbackFunction()} ${name}`);
}

function sayBye() {
  return 'Goodbye';
}

const sayHello = function() {
  return 'Hello';
};

greeter1('John', sayHello); // Callback using function expression.
greeter1('Travis', sayBye); // Callback using a named function.
greeter1('Jane', function() {
  return 'Nice to meet you';
}); // Callback using an anonymous function.

/* A more realistic example of a callback function. */

const button = document.querySelector('.clickMe'); // .clickMe is the class of a button in the index.html web page.
function handleClick() {
  console.log('You just clicked a button !');
}
button.addEventListener('click', handleClick);

// FUNCTION_6 : Arrow functions.

// Examples of Arrow functions with implicit return :
const inchToCM = inches => inches * 2.54; // return a single value such as number, string etc.
const makePlayer = (first, last) => ({ name: `${first} ${last}`, points: 0 }); // shorthand to return an Object - Enclose the code in ().

// FUNCTION_7 : Methods - Functions which live inside of Objects.
const person = {
  name: 'James Bond',
  age: 25,

  // Method.
  showAge() {
    console.log(`${this.name}'s age is ${this.age}`);
  },

  // Method expressed as an arrow function.
  /* NOTE - The this keyword won't work inside an arrow function. It will give an undefined. */
  greet: name => {
    console.log(`Hi ${name} !`);
  },
};
person.greet('Steve');
person.showAge();
