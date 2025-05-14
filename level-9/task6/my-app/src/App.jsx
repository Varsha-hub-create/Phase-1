import React, { useEffect, useState, memo } from 'react';
import './App.css'; // Ensure this is imported to apply styles

// Child Component - Large list of items
const LargeList = ({ items }) => {
  console.log('Child re-rendered');
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>Item #{item}</div>
      ))}
    </>
  );
};

// Custom comparison function (deep comparison)
const areEqual = (prevProps, nextProps) => {
  if (prevProps.items.length !== nextProps.items.length) return false;
  for (let i = 0; i < prevProps.items.length; i++) {
    if (prevProps.items[i] !== nextProps.items[i]) return false;
  }
  return true;
};

// Memoized child component
const MemoizedLargeList = memo(LargeList, areEqual);

// Parent Component
const App = () => {
  const [counter, setCounter] = useState(0);
  const [items] = useState(() => Array.from({ length: 1000 }, (_, i) => i + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <h1>Counter: {counter}</h1>
      <div className="list-container">
        <MemoizedLargeList items={items} />
      </div>
    </div>
  );
};

export default App;
