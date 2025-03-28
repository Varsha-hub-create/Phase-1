import React from 'react';
import "./App.css"

const Greeting = ({ name = "Madhu", age = "35", city = "Chennai" }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Greeting name="Varsha" age={25} city="Bangalore" />
      <Greeting name="Rahul" age={30} city="Coimbatore" />
      <Greeting />  
    </div>
  );
};

export default App;
