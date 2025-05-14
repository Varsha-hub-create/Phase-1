import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>
        Email:{" "}
        <a href="mailto:varshinisakthivel18@gmail.com">
          varshinisakthivel18@gmail.com
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/Varsha-hub-create" target="_blank" rel="noopener noreferrer">
          Varsha-hub-create
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/varshini-s-" target="_blank" rel="noopener noreferrer">
          Varshini S
        </a>
      </p>
      <p>
        Phone: <a href="tel:+916380997220">+91 6380997220</a>
      </p>
    </div>
  );
};

export default Contact;
