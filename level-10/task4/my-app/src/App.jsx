import React from 'react';
function App() {
  
let fullName = "Varsha";

let upperCaseName = fullName.toUpperCase();

let nameLength = fullName.length;

let firstName = fullName.split(" ")[0];

let hometown = "Dharmapuri";

let concatenatedString = fullName + " from " + hometown;

console.log("Uppercase Name:", upperCaseName);
console.log("Name Length:", nameLength);
console.log("First Name:", firstName);
console.log("Hometown:", hometown);
console.log("Concatenated String:", concatenatedString);
}
  
  export default App; 
  