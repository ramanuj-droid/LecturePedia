import React from "react";
import ProgressBar from "../atoms/ProgressBar";

const CourseProgressCard = ({ course }) => {
  return (
    <div className="course-card">
      <h4>{course.title}</h4>

      <ProgressBar value={course.progress} />

      <span>{course.progress}% completed</span>
    </div>
  );
};

export default CourseProgressCard;