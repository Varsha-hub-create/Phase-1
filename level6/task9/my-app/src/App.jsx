import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus} style={{ marginLeft: "10px" }}>
        Focus Input
      </button>
    </div>
  );
};

export default InputFocus;
