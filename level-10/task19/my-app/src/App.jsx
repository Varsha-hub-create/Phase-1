import React from 'react';
function App() {
   
function factorial(n) {
  if (n < 0) {
    return "Error: Factorial is not defined for negative numbers.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const testNumbers = [5, 7, 0, 1, -3];

testNumbers.forEach(num => {
  console.log(`Factorial of ${num}:`, factorial(num));
});

  }
  
  export default App;
  