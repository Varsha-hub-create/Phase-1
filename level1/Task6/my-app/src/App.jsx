import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("blue"); // Default color

  const boxStyle = {
    backgroundColor: color,
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    width: "250px",
    margin: "20px 600px",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Dynamic Background</h2>

      {/* Dynamic Color Box */}
      <div style={boxStyle}>This box is {color}!</div>

      {/* Buttons to Change Color */}
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}
