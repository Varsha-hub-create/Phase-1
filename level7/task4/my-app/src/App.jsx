import React from "react";
import FetchComponent from "./components/useFetch.js"; 
import ErrorBoundary from "./components/ErrorBoundary.js"; 

function App() {
    return (
        <ErrorBoundary>
            <FetchComponent />
        </ErrorBoundary>
    );
}

export default App;
