import "./App.css"
export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Greeting />
    </div>
  );
}

// Functional Greeting Component
function Greeting() {
  return <h2>Hello its a functional component!</h2>;
}
