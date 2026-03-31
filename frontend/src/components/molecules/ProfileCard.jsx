import React from "react";
import ProfileField from "../atoms/ProfileField";

const ProfileCard = ({ data }) => {
  return (
    <div className="profile-card">
      <h2>Profile</h2>

      <ProfileField label="Name" value={data.name} />
      <ProfileField label="User ID" value={data.userId} />
      <ProfileField label="Course" value={data.course} />

      {/* Progress */}
      <div className="progress">
        <span>Progress</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${data.progress}%` }}
          />
        </div>
        <span>{data.progress}%</span>
      </div>
    </div>
  );
};

export default ProfileCard;