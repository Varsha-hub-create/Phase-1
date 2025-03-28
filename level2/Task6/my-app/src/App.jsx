import React from 'react';
import PropTypes from 'prop-types';
import "./App.css"
const Greeting = ({ name="Nandhu", age="24", city ="Chennai"}) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string,  // Must be a string
  age: PropTypes.number,   // Must be a number
  city: PropTypes.string,  // Must be a string
};
const App = () => {
  return (
    <div>
      <Greeting name="Varsha" age={25} city="Mumbai" />
      <Greeting name="Rahul" age={30} city="Delhi" />
      <Greeting />
    </div>
  );
};

export default App;
