import React, { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Smartphone", imageUrl: "../src/phone.jpg", price: "Rs.1699" },
  { id: 2, name: "Laptop", imageUrl: "../src/laptop.jpg", price: "Rs.50,999" },
  { id: 3, name: "Headphones", imageUrl: "../src/headphones.jpg", price: "Rs.3199" },
  { id: 4, name: "Smartwatch", imageUrl: "../src/smartwatch.jpg", price: "Rs.1249" },
];

export default function ProductListing() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <h1>E-commerce Product Listing</h1>
      <div>🛒 Cart: {cart.length} items</div>
      
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
