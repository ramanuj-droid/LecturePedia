import React from "react";
import SidebarSection from "../sections/SidebarSection";
import ProgressSection from "../sections/ProgressSection";

const Progress = () => {
  return (
    <div className="progress-page">
      <SidebarSection />

      <div className="progress-content">
        <ProgressSection />
      </div>
    </div>
  );
};

export default Progress;