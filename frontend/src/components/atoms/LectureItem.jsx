import React from "react";

const LectureItem = ({ lecture, isActive, onClick }) => {
  return (
    <div
      className={`lecture-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {lecture.title}
    </div>
  );
};

export default LectureItem;