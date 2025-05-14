import React from 'react';
function App() {
   
const product = {
  name: "Wireless Headphones",
  price: 59.99,
  category: "Electronics",
  inStock: true
};

const { name, price, category, inStock } = product;

const formatProductDetails = ({ name, price, category, inStock }) => {
  return `Product: ${name}\nCategory: ${category}\nPrice: $${price.toFixed(2)}\nAvailable: ${inStock ? "Yes" : "No"}`;
};

console.log("Extracted Values:");
console.log(`Name: ${name}`);
console.log(`Price: $${price}`);
console.log(`Category: ${category}`);
console.log(`In Stock: ${inStock ? "Yes" : "No"}`);

console.log("\nFormatted Product Details:");
console.log(formatProductDetails(product));

  }
  
  export default App; 
  