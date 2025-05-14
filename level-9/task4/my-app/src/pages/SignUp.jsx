import { useAuth } from "../context/AuthContext"; // ✅ Correct import
import { Navigate } from "react-router-dom";
import "./SignUp.css"; 

const SignUp = () => {
  const auth = useAuth();

  // ✅ Check if auth is null
  if (!auth) {
    console.error("AuthContext is not available. Ensure AuthProvider is wrapped correctly.");
    return <p>Loading...</p>; // ✅ Prevent crash
  }

  const { isAuthenticated, login } = auth;

  return isAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <div className="container">
      <div className="card">
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
