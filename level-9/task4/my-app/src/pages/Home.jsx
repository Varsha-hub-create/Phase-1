import { Link } from "react-router-dom";
import "./Home.css"; // ✅ No 'default' export needed

const Home = () => (
  <div className="container">
    <h2>Home Page</h2>
    <nav className="nav">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  </div>
);

export default Home;
