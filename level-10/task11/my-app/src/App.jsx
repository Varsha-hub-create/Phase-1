import React from 'react';
function App() {
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNumbers = numbers.map(num => num ** 2);

const oddNumbers = numbers.filter(num => num % 2 !== 0);

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Numbers and their square roots:");
numbers.forEach(num => console.log(`Number: ${num}, Square Root: ${Math.sqrt(num).toFixed(2)}`));

console.log("Original numbers:", numbers);
console.log("Squared numbers:", squaredNumbers);
console.log("Odd numbers:", oddNumbers);
console.log("Sum of all numbers:", sum);

  }
  
  export default App; 
  