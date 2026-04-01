import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className="course-card">
      <h3>{course.title}</h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${course.progress}%` }}
        />
      </div>

      <p>{course.progress}% completed</p>

      {/* 🔥 BUTTON */}
      <button className="course-btn" onClick={handleClick}>
        Go to Course
      </button>
    </div>
  );
};

export default CourseCard;