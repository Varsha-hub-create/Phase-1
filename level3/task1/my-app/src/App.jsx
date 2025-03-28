import React from "react";
import { useFormik } from "formik";
import './App.css';
const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted:", values);
      alert("Form Submitted Successfully!");
      resetForm(); // Clears the form after submission
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <button
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default BasicForm;
