function App() {
    var myVar = "Your Name"; 
    let myLet = 25; 
    const myConst = "Blue"; 

    console.log("Name:", myVar);
    console.log("Age:", myLet);
    console.log("Favorite Color:", myConst);
  
    return (
      <div>
        <h1>Variable Declaration</h1>
        <p><strong>Name:</strong> {myVar}</p>
        <p><strong>Age:</strong> {myLet}</p>
        <p><strong>Favorite Color:</strong> {myConst}</p>
      </div>
    );
  }
  
  export default App;
  