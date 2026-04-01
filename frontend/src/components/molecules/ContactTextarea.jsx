import React from "react";

const ContactTextarea = ({ label, name }) => {
  return (
    <div className="contact-textarea">
      <label>{label}</label>
      <textarea name={name} rows="5" required />
    </div>
  );
};

export default ContactTextarea;