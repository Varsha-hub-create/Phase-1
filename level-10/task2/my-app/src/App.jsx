import React, { useEffect } from "react";

function App() {
  // Declare variables of different data types
  let myString = "Hello, JavaScript!";
  let myNumber = 42;
  let myBoolean = true;
  let myNull = null;
  let myUndefined;
  let myObject = { name: "Alice", age: 25 };

  // Convert a string to a number using parseInt()
  let stringNumber = "123";
  let convertedNumber = parseInt(stringNumber);

  useEffect(() => {
    console.log("Type of myString:", typeof myString);
    console.log("Type of myNumber:", typeof myNumber);
    console.log("Type of myBoolean:", typeof myBoolean);
    console.log("Type of myNull:", typeof myNull);
    console.log("Type of myUndefined:", typeof myUndefined);
    console.log("Type of myObject:", typeof myObject);
    console.log("Converted number:", convertedNumber);
    console.log("Type of convertedNumber:", typeof convertedNumber);
  }, []);

  return (
    <div>
      <h1>JavaScript Data Types</h1>
      <p>Type of myString: {typeof myString}</p>
      <p>Type of myNumber: {typeof myNumber}</p>
      <p>Type of myBoolean: {typeof myBoolean}</p>
      <p>Type of myNull: {typeof myNull}</p>
      <p>Type of myUndefined: {typeof myUndefined}</p>
      <p>Type of myObject: {typeof myObject}</p>
      <p>Converted number: {convertedNumber}</p>
      <p>Type of convertedNumber: {typeof convertedNumber}</p>
    </div>
  );
}

export default App;