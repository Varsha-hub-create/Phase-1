import React, { useState } from "react";
import './App.css';
const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide Content" : "Show Content"}
      </button>
      {isVisible && (
        <div>
          <p>This is show content!</p>
        </div>
      )}
    </div>
  );
};

export default ToggleComponent;
