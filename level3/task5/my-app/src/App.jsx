import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './App.css';
// Validation Schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  age: yup.number().positive().integer().required("Age is required"),
});

export default function ComplexForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <div>
      <form
      >
        <h2>Register</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label>Name</label>
          <input
            type="text"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
        </div>

        {/* Email Field */}
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>

        {/* Password Field */}
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>

        {/* Age Field */}
        <div>
          <label>Age</label>
          <input
            type="number"
            {...register("age")}
          />
          <p>{errors.age?.message}</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
