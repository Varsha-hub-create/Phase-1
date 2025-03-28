import React from 'react';
import "./App.css"
const Greeting = ({ name = "World" }) => {
  return <h1>Hello, {name}!</h1>;
};

const App = () => {
  return (
    <div>
      <Greeting />  {/* it shows hello world text */}
      <Greeting name="Varsha" />  {/* it shows hello varsha */}
    </div>
  );
};


export default App;
