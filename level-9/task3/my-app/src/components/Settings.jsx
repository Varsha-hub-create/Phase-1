import React from "react";
import './Settings.css';

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <p>Customize your application settings and preferences to enhance your experience.</p>

      <h2>🔧 General Settings</h2>
      <ul>
        <li>🖥️ Theme: <strong>Dark Mode</strong> <button>Switch</button></li>
        <li>🌍 Language: <strong>English</strong> <button>Change</button></li>
        <li>📩 Email Updates: <strong>Enabled</strong></li>
      </ul>

      <h2>🔐 Security & Privacy</h2>
      <ul>
        <li>Password: ******** <button>Change</button></li>
        <li>Two-Factor Authentication: <strong>Enabled</strong></li>
        <li>Session Timeout: 30 minutes</li>
      </ul>

      <h2>📱 Notification Preferences</h2>
      <ul>
        <li>🔔 System Alerts: <strong>On</strong></li>
        <li>📩 Email Notifications: <strong>On</strong></li>
        <li>📱 Mobile Alerts: <strong>Off</strong></li>
      </ul>

      <h2>❌ Account Management</h2>
      <p>If you wish to deactivate your account, please proceed with caution.</p>
      <button style={{ backgroundColor: "red", color: "white" }}>Deactivate Account</button>
    </div>
  );
};

export default Settings;
