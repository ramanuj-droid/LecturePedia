import React from "react";

const AuthForm = ({
  type,
  formData,
  handleChange,
  handleSubmit,
  loading,
  error
}) => {
  return (
    <div className="auth-form">

      {/* REGISTER FIELDS */}
      {type === "register" && (
        <>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="auth-input"
          />
          <input
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="auth-input"
          />
        </>
      )}

      {/* EMAIL */}
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="auth-input"
      />

      {/* PASSWORD */}
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="auth-input"
      />

      {/* FORGOT */}
      {type === "login" && (
        <div className="forgot">Forgot Password?</div>
      )}

      {/* ERROR */}
      {error && <div className="error">{error}</div>}

      {/* BUTTON */}
      <button className="auth-button" onClick={handleSubmit}>
        {loading ? "Please wait..." : type === "login" ? "Login" : "Register"}
      </button>
    </div>
  );
};

export default AuthForm;