import React, { useState } from "react";
import AuthForm from "../molecules/AuthForm";
import useLogin from "../../hooks/useLogin";
import useRegister from "../../hooks/useRegister";

const AuthBox = () => {
  const [activeTab, setActiveTab] = useState("login");

  const { login, loading: loginLoading, error: loginError } = useLogin();
  const { register, loading: registerLoading, error: registerError } = useRegister();

  // 🧠 Form State
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    email: "",
    password: ""
  });

  // 🔄 Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🚀 Handle Submit
  const handleSubmit = async () => {
    console.log("SUBMIT CLICKED", activeTab); // debug

    if (activeTab === "login") {
      const res = await login({
        email: formData.email,
        password: formData.password
      });

      if (res) {
        window.location.href = "/dashboard";
      }
    } else {
      const res = await register(formData);

      if (res) {
        alert("Registered successfully!");
        setActiveTab("login");
      }
    }
  };

  return (
    <div className="auth-box">
      {/* Tabs */}
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

      {/* Form */}
      <AuthForm
        type={activeTab}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loginLoading || registerLoading}
        error={loginError || registerError}
      />
    </div>
  );
};

export default AuthBox;