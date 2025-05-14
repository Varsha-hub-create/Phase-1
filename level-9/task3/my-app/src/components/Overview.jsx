import React from "react";
import './Overview.css';

const Overview = () => {
  return (
    <div>
      <h1>Dashboard Overview</h1>
      <p>Welcome to your dashboard! Here, you can track your recent activities, view system insights, and stay updated with important notifications.</p>
      
      <h2>📊 Recent Activities</h2>
      <ul>
        <li>✔️ Completed Task: "Update Project Report" (2 hours ago)</li>
        <li>🕒 Scheduled Meeting: "Client Review Call" (Tomorrow at 10 AM)</li>
        <li>🔔 New Notification: "Security Update Available"</li>
      </ul>

      <h2>📅 Upcoming Events</h2>
      <ul>
        <li>📌 Team Meeting - Wednesday, 3 PM</li>
        <li>📌 Deadline: Final Project Submission - Friday, 5 PM</li>
        <li>📌 Performance Review - Next Monday, 10 AM</li>
      </ul>

      <h2>📈 Performance Metrics</h2>
      <p>Your productivity score for this week is <strong>87%</strong>. Keep up the great work!</p>
    </div>
  );
};

export default Overview;
