import React from 'react';
import "./App.css"

// Greeting Component
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Main App Component
const App = () => {
  return <Greeting name="Varsha" />;
};

export default App;
