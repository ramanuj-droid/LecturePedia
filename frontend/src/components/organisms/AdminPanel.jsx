import React from "react";
import CourseManager from "./CourseManager";
import LectureManager from "./LectureManager";

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

      <div className="admin-grid">
        <CourseManager />
        <LectureManager />
      </div>
    </div>
  );
};

export default AdminPanel;