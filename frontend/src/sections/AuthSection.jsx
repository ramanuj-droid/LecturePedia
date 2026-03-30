import React from "react";
import AuthBox from "../components/organisms/AuthBox";

const AuthSection = () => {
  return (
    <section className="auth-section">
      <div className="auth-container">
        
        {/* LEFT SIDE */}
        <div className="auth-left">
          <AuthBox />
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="auth-right">
          <img
            src="/assets/auth-image.png" // put your image here
            alt="learning"
          />
        </div>

      </div>
    </section>
  );
};

export default AuthSection;