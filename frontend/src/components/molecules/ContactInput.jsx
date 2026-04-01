import React from "react";

const ContactInput = ({ label, type = "text", name }) => {
  return (
    <div className="contact-input">
      <label>{label}</label>
      <input type={type} name={name} required />
    </div>
  );
};

export default ContactInput;