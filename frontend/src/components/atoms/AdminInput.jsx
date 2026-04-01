import React from "react";

const AdminInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      className="admin-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default AdminInput;