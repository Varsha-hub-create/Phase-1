import React from 'react';
function App() {
  let age = 25; 

  if (age >= 65) {
      console.log("You are a senior citizen");
  } else if (age >= 18) {
      console.log("You are an adult");
  } else {
      console.log("You are a minor");
  }
  
}
  export default App; 
  