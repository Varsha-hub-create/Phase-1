import React from "react";
import { FixedSizeList as List } from "react-window";
import "./App.css";

const productBaseNames = [
  "Wireless Mouse", "Gaming Laptop", "Smartphone", "Bluetooth Speaker",
  "Running Shoes", "Desk Lamp", "Coffee Maker", "Backpack", "Water Bottle",
  "Noise Cancelling Headphones", "Keyboard", "Webcam", "Fitness Tracker",
  "Smartwatch", "E-book Reader", "Desk Chair", "Monitor", "Flash Drive"
];

const data = Array.from({ length: 10000 }, (_, i) => {
  const base = productBaseNames[i % productBaseNames.length];
  return `🛍️ ${base} - Model #${i + 1}`;
});

const Row = ({ index, style }) => (
  <div className="row" style={style}>
    {data[index]}
  </div>
);

const VirtualList = () => {
  return (
    <div className="list-container">
      <h1 className="title">Product List</h1>
      <List
        height={600}
        itemCount={data.length}
        itemSize={35}
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualList;
