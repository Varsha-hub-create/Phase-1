import React from 'react';
function App() {
  
let person = {
  name: "Varsha",
  age: 25,
  city: "Coimbatore",
  hobbies: ["Reading", "Painting", "Traveling"]
};

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
console.log("Hobbies:", person.hobbies.join(", "));

person.job = "Software Developer";

person.age = 30;

person.greet = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

console.log(person.greet());

console.log("Updated Person Object:", person);

  }
  
  export default App; 
  