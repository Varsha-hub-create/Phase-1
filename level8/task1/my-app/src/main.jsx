import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // ✅ Ensure you're importing App correctly

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
