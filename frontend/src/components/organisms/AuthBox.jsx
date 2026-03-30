import React, { useState } from "react";
import AuthForm from "../molecules/AuthForm";

const AuthBox = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="auth-box">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </div>
        <div
          className={`tab ${activeTab === "register" ? "active" : ""}`}
          onClick={() => setActiveTab("register")}
        >
          Register
        </div>
      </div>

      <AuthForm type={activeTab} />
    </div>
  );
};

export default AuthBox;