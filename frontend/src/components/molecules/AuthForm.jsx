import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const AuthForm = ({ type }) => {
  return (
    <div className="auth-form">
      {type === "register" && (
        <>
          <Input placeholder="Full Name" />
          <Input placeholder="Department" />
        </>
      )}

      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

      {type === "login" && (
        <div className="forgot">Forgot Password?</div>
      )}

      <Button text={type === "login" ? "Login" : "Register"} />
    </div>
  );
};

export default AuthForm;