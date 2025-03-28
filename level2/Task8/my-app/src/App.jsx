import React, { useState } from 'react';
import "./App.css"
const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div >
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {isVisible && (
        <div>
          <p>Hello,I'm Varsha!</p>
        </div>
      )}
    </div>
  );
};

export default App;
