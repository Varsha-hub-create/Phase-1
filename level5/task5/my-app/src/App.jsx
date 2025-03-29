import React, { useState } from "react";
import "./App.css"; 
export default function Calculator() {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);
  const [result, setResult] = useState(null);

  const handleNumberClick = (num) => {
    setInput((prev) => prev + num);
  };

  const handleOperatorClick = (op) => {
    if (input === "") return;
    setOperator(op);
    setPrevValue(input);
    setInput("");
  };

  const calculateResult = () => {
    if (!operator || input === "" || prevValue === null) return;
    let computedResult;
    const num1 = parseFloat(prevValue);
    const num2 = parseFloat(input);

    switch (operator) {
      case "+":
        computedResult = num1 + num2;
        break;
      case "-":
        computedResult = num1 - num2;
        break;
      case "*":
        computedResult = num1 * num2;
        break;
      case "/":
        computedResult = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        return;
    }
    setResult(computedResult);
    setInput("");
    setOperator(null);
    setPrevValue(null);
  };

  const handleClear = () => {
    setInput("");
    setOperator(null);
    setPrevValue(null);
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-display">{result !== null ? result : input || "0"}</div>
      <div className="calculator-buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map((btn) => (
          <button
            key={btn}
            className={`calculator-button ${["+", "-", "*", "/"].includes(btn) ? "operator-button" : ""} 
              ${btn === "=" ? "equal-button" : ""} 
              ${btn === "C" ? "clear-button" : ""}`}
            onClick={() => {
              if (!isNaN(btn)) handleNumberClick(btn);
              else if (["+", "-", "*", "/"].includes(btn)) handleOperatorClick(btn);
              else if (btn === "=") calculateResult();
              else if (btn === "C") handleClear();
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
