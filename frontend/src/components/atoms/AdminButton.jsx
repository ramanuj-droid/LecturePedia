import React from "react";

const AdminButton = ({ text, onClick }) => {
  return (
    <button className="admin-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default AdminButton;