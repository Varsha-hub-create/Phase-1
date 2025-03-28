import React from "react";
import { useFormik } from "formik";
import './App.css';
const MultiFieldForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      address: "",
      phone: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Name is required";
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.age) errors.age = "Age is required";
      if (!values.address) errors.address = "Address is required";
      if (!values.phone) errors.phone = "Phone number is required";
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted:", values);
      alert("Form Submitted Successfully!");
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
    >
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div>{formik.errors.name}</div>
        )}
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
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age && (
          <div>{formik.errors.age}</div>
        )}
      </div>

      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address && (
          <div>{formik.errors.address}</div>
        )}
      </div>

      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div>{formik.errors.phone}</div>
        )}
      </div>

      <button
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default MultiFieldForm;
