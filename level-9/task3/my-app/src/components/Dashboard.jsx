import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating a loading delay
  }, []);

  if (loading) {
    return <div className="loading-screen">Loading Dashboard...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="overview">Overview</Link></li>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet /> {/* This will render child routes */}
    </div>
  );
};

export default Dashboard;
