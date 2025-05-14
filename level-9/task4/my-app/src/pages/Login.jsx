import { useAuth } from "../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
  const { login, isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Navigate to="/" replace /> // ✅ Redirect to Home instead of Dashboard
  ) : (
    <div className="container">
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
