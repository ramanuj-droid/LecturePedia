import React from "react";
import SidebarSection from "../sections/SidebarSection";
import CoursesSection from "../sections/CoursesSection";

const Courses = () => {
  return (
    <div className="courses-page">
      <SidebarSection />

      <div className="courses-content">
        <CoursesSection />
      </div>
    </div>
  );
};

export default Courses;