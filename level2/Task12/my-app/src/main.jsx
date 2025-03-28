import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // ✅ Importing the default export

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
