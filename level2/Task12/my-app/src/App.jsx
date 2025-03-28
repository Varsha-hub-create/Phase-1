import React from "react";

const WelcomeMessage = ({ isLoggedIn }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
      <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>
    </div>
  );
};

const App = () => {
  return <WelcomeMessage isLoggedIn={true} />; // Change this to false to test
};

export default App;
