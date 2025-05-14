import React from 'react';
function App() {
  
let favoriteFoods = ["Pizza", "Burger", "Sushi", "Pasta", "Tacos"];

favoriteFoods.push("Ice Cream");

favoriteFoods.shift();

console.log("Array Length:", favoriteFoods.length);

let pastaIndex = favoriteFoods.indexOf("Pasta");
console.log("Index of Pasta:", pastaIndex);

let slicedArray = favoriteFoods.slice(1, 4);

console.log("Original Array:", favoriteFoods);
console.log("Sliced Array:", slicedArray);

  }
  
  export default App; 
  