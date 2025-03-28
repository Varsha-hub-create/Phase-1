import React from "react";
import ReactDOM from "react-dom";

const Greeting = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
      <h1>Hello from a function component!</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(<Greeting />, rootElement);
} else {
  console.error("Root element not found! Ensure <div id='root'></div> exists in index.html.");
}
