import React from "react";

const ProfileField = ({ label, value }) => {
  return (
    <div className="profile-field">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
};

export default ProfileField;