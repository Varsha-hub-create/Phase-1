function App() {

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

const object1 = { name: "Varsha", age: 25 };
const object2 = { city: "Coimbatore", country: "India" };

const combinedObject = { ...object1, ...object2 };

const arrayCopy = [...array1];
arrayCopy.push(10); 

console.log("Combined Array:", combinedArray);
console.log("Combined Object:", combinedObject);
console.log("Original Array:", array1);
console.log("Modified Copy:", arrayCopy);

  }
  
  export default App; 
  