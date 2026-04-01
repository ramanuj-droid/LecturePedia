import React from "react";

const LectureItem = ({ lecture }) => {
  return (
    <div className="list-item">
      {lecture.title} ({lecture.courseId})
    </div>
  );
};

export default LectureItem;