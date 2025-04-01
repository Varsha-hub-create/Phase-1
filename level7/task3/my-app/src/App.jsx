import React from "react";
import useInput from "./components/useInput.js";
import './App.css';

const InputComponent = () => {
    const input = useInput("");

    return (
        <div>
            <input type="text" {...input} placeholder="Type something..." />
            <p>Entered Text: {input.value}</p>
        </div>
    );
};

export default InputComponent;