import React from 'react';
function App() {
  
console.log("3x3 Multiplication Table:");

for (let i = 1; i <= 3; i++) {
    let row = ""; 
    for (let j = 1; j <= 3; j++) {
        row += `${i * j}\t`;
    }
    console.log(row.trim()); // Print each row
}

  }
  
  export default App;
  