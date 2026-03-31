import React from "react";
import SidebarSection from "../sections/SidebarSection";
import VideoSection from "../sections/VideoSection";

const CoursePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <SidebarSection />

      <div style={{ flex: 1 }}>
        <VideoSection />
      </div>
    </div>
  );
};

export default CoursePage;