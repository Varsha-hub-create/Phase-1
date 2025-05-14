import React from 'react';
function App() {

function divideNumbers(a, b) {
  if (b === 0) {
      throw new Error("Cannot divide by zero");
  }
  return a / b;
}

const testCases = [
  { a: 10, b: 2 },  
  { a: 15, b: 5 },  
  { a: 8, b: 0 },   
];

testCases.forEach(({ a, b }) => {
  try {
      let result = divideNumbers(a, b);
      console.log(`Result of ${a} / ${b} = ${result}`);
  } catch (error) {
      console.log(`Error: ${error.message}`);
  } finally {
      console.log("Execution complete for this operation.\n");
  }
});

  }
  
  export default App; 
  