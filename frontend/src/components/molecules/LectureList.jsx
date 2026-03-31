import React from "react";
import LectureItem from "../atoms/LectureItem";

const LectureList = ({ lectures, currentIndex, setCurrentIndex }) => {
  return (
    <div className="lecture-list">
      {lectures.map((lecture, index) => (
        <LectureItem
          key={lecture.id}
          lecture={lecture}
          isActive={index === currentIndex}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
};

export default LectureList;