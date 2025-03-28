import './App.css';
export default function App() {
  const User = "User"; // Change to "User" to test

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Welcome to the Dashboard</h2>

      {User === "Admin" ? (
        <p style={{ color: "red", fontWeight: "bold" }}>
          🔑 Hello, Admin! You have full access.
        </p>
      ) : (
        <p style={{ color: "blue", fontWeight: "bold" }}>
          👤 Hello, User! You have limited access.
        </p>
      )}
    </div>
  );
}
