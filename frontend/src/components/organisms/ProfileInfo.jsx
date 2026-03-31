import React from "react";
import ProfileCard from "../molecules/ProfileCard";
import { PROFILE_DATA } from "../../constants/profile";

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <ProfileCard data={PROFILE_DATA} />
    </div>
  );
};

export default ProfileInfo;