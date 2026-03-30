import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="auth-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;