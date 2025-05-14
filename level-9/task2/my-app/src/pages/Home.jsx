import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/products">Go to Product List</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
