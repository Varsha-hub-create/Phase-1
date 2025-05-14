import React from 'react';

function App(){

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;


let num3 = num1 ** num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Exponentiation:", num3);

return (
  <div>
    <h1>Basic Arithmetic Operations</h1>
    <p>Sum: {sum}</p>
    <p>Difference: {difference}</p>
    <p>Product: {product}</p>
    <p>Quotient: {quotient}</p>
    <p>Remainder: {remainder}</p>
    <p>Exponentiation: {num3}</p>
  </div>
);
}

export default App;