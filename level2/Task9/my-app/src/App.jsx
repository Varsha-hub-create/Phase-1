import { useState } from "react";
import "./App.css"
export default function Input() {
  const [text, setText] = useState("");

  return (
    <div id="a">
      <input className="b"
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Input Field: {text}</p>
    </div>
  );
}
