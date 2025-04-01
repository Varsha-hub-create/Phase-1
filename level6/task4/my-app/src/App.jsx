import React, { useState } from "react";
import './App.css';
const UserForm = () => {
  const [user, setUser] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Information</h2>
      <label>
        Name:
        <input type="text" name="name" value={user.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={user.age} onChange={handleChange} />
      </label>
      <br />
      <p>
        <strong>Name:</strong> {user.name} <br />
        <strong>Age:</strong> {user.age}
      </p>
    </div>
  );
};

export default UserForm;
