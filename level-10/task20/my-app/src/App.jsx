import React from 'react';
function App() {

    // Higher-order function that applies a given function to each element in an array
function operateOnArray(arr, func) {
  return arr.map(func);
}

// Callback function that doubles a number
const doubleNumber = num => num * 2;

// Callback function that squares a number
const squareNumber = num => num ** 2;

// Callback function that converts a number to a string
const numberToString = num => num.toString();

// Test array
const numbers = [1, 2, 3, 4, 5];

// Applying the higher-order function with different callbacks
const doubledArray = operateOnArray(numbers, doubleNumber);
const squaredArray = operateOnArray(numbers, squareNumber);
const stringArray = operateOnArray(numbers, numberToString);

// Print results to the console
console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledArray);
console.log("Squared Array:", squaredArray);
console.log("String Array:", stringArray);

  }
  
  export default App; // Ensure this line is present
  