import React from 'react';
function App() {

const firstName = "varsha";
const lastName = "Sakthivel";
const age = 20;

const introduction = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;

const multiLineString = `
This is a multi-line template literal.
In five years, I will be ${age + 5} years old.
`;

const ageMessage = `I am ${age >= 18 ? "an adult" : "a minor"}.`;

console.log(introduction);
console.log(multiLineString);
console.log(ageMessage);

  }
  
  export default App; 
  