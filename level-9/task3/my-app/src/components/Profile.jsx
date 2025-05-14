import React from "react";
import './Profile.css';

const Profile = () => {
  return (
    <div>
      <h1>My Profile</h1>
      <p>Manage your personal information, security settings, and preferences.</p>

      <h2>👤 Personal Information</h2>
      <ul>
        <li><strong>Name:</strong>Varsha</li>
        <li><strong>Email:</strong> varsha@gmail.com</li>
        <li><strong>Phone:</strong> +123 456 7890</li>
        <li><strong>Location:</strong> New York, USA</li>
      </ul>

      <h2>🔐 Security Settings</h2>
      <ul>
        <li>Password: ******** <button>Change Password</button></li>
        <li>Two-Factor Authentication: <strong>Enabled</strong></li>
        <li>Last Login: March 30, 2025 - 5:45 PM</li>
      </ul>

      <h2>⚙️ Account Preferences</h2>
      <ul>
        <li>Language: English</li>
        <li>Theme: Dark Mode</li>
        <li>Email Notifications: Subscribed</li>
      </ul>

      <button>Update Profile</button>
    </div>
  );
};

export default Profile;
