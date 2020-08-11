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
