import React from 'react';
function App() {
  function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("Counter 1:", counter1()); // 1
console.log("Counter 1:", counter1()); // 2
console.log("Counter 2:", counter2()); // 1
console.log("Counter 2:", counter2()); // 2
console.log("Counter 1:", counter1()); // 3
console.log("Counter 2:", counter2()); // 3

  }
  
  export default App; // Ensure this line is present
  