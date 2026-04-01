import React, { useState } from "react";
import LectureForm from "../molecules/LectureForm";
import LectureItem from "../molecules/LectureItem";
import { INITIAL_COURSES } from "../../constants/admin";

const LectureManager = () => {
  const [lectures, setLectures] = useState([]);

  const addLecture = (lecture) => {
    setLectures([...lectures, lecture]);
  };

  return (
    <div>
      <LectureForm courses={INITIAL_COURSES} onAdd={addLecture} />

      <div className="admin-list">
        <h4>Lectures</h4>
        {lectures.map((l, i) => (
          <LectureItem key={i} lecture={l} />
        ))}
      </div>
    </div>
  );
};

export default LectureManager;