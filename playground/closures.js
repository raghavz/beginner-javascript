// This file is not in the course code. I added it for ease & consistency.

/* eslint-disable */

/* Closures - They give us the ability to access a parent level scope from a child scope even after the parent or enclosing 
function has executed, i.e been closed/terminated. */

/* In the output of the code examples given below, we see that the inner function can still access the scope of its parent 
or enclosing function even after the parent function has executed or closed (hence the word closure.). Thus, in example 2, 
sayHello() & sayHey() can still access the value of myGreet even after the enclosing function has executed. Similar explanation 
for example 1. */

// EXAMPLE 1 :
function outer() {
  const outerVar = 'Hey I am the outer var!';

  function inner() {
    const innerVar = 'Hey I am an inner var!';
    console.log(innerVar);
    console.log(outerVar);
  }
  return inner;
}

const innerFn = outer();
innerFn();

// Output -
// "Hey I am an inner var!"
// "Hey I am the outer var!"

// EXAMPLE 2 :
function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function(name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');

console.log(sayHello('wes'));
console.log(sayHello('kait'));
console.log(sayHey('kait'));

// Output -
// "HELLO wes"
// "HELLO kait"
// "HEY kait"

// EXAMPLE 3 :
function createGame(gameName) {
  let score = 0;// score is a private variable.
  return function win() {
    score += 1;
    return `Your game ${gameName} score is ${score}`;
  };
}

const hockeyGame = createGame('hockey');
const soccerGame = createGame('soccer');

console.log(hockeyGame());
console.log(hockeyGame());
console.log(soccerGame());

// Output -
// Your game hockey score is 1
// Your game hockey score is 2
// Your game soccer score is 1
