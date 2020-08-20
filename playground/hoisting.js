console.log('It works !');

/*eslint-disable*/

// Hoisting allows us to access functions and variables *before they are created*, i.e. before they occur in the code file.

/* Regular functions are hoisted, but functions stored in variables or constants are not. For variables, only their declaration 
part is hoisted but not their assigned value. Using functions or variables before they are declared is not recommended !*/

//Variable hoisting.
//console.log(magicNumber);// Fails ! Uncaught ReferenceError: magicNumber is not defined.
console.log(age);// Fails ! undefined. Compare this "failure" with the above "failure".
var age = 10;

//Function hoisting.
sayHi('wes');// Works !
function sayHi(name) {
	console.log(`Hi ${name} !`);
}
