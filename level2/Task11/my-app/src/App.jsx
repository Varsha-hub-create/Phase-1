import React from "react";
import './App.css';
const ItemList = () => {
  const items = ["Tamil", "Telugu", "English", "Hindi"];

  return (
    <div>
      
      <ul>
      <h2>Language List</h2>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
