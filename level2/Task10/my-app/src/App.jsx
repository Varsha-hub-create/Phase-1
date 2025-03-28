import { useState } from "react";

export default function SimpleForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    alert(`Form Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit" >
        Submit
      </button>
    </form>
  );
}
