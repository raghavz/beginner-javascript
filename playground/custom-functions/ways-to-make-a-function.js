// The message should appear in browser console (browser can be opened via Live Server plugin for VS code).
console.log('This js file works!'); // Open index.html to check if it can run this js script.

// ***Ways to make a function :***

// FN_1 : With function declaration.

// console.log(`Function declaration 1 : ${doctorize('James')} `); // Function call before function declaration - It works !
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}
// console.log(`Function declaration 2 : ${doctorize('James')} `); // Function call after function declaration - It works !

// FN_2 : With function expression.
/* Note : These are not hoisted ("refer - function hoisting"). Hence, you can't use such functions before they are declared. */

// doctorizeFn('John'); // It fails ! Uncaught ReferenceError: Cannot access 'doctorizeFn' before initialization.
const doctorizeFn = function(firstName) {
  return `Dr. ${firstName}`;
};
// doctorizeFn('John'); // It works !

/* FN_3 : Anonymous function - A function with no name. These are used in callbacks and IIFE: immediately invoked function 
expressions. Read further */

// FN_4 : IIFE: immediately invoked function expressions.
(function(age) {
  return `You are cool and age ${age}`;
})(10); // The (10) at the end shows that we call this function (just after declaring it).

// FN_5 : Callback functions.
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

/* More realistic example of callback function */

const button = document.querySelector('.clickMe'); // .clickMe is the class of a button in the index.html web page.
function handleClick() {
  console.log('You just clicked a button !');
}
button.addEventListener('click', handleClick);

// TODO - Next items Arrow functions, Methods. Refer https://www.notion.so/Beginner-JavaScript-e2ef045754d14e96b93791f638bbcaf6.
