import React from "react";
import SidebarSection from "../sections/SidebarSection";
import ProfileSection from "../sections/ProfileSection";

const Profile = () => {
  return (
    <div className="profile-page">
      
      {/* Sidebar */}
      <SidebarSection />

      {/* Main Content */}
      <div className="profile-content">
        <ProfileSection />
      </div>

    </div>
  );
};

export default Profile;