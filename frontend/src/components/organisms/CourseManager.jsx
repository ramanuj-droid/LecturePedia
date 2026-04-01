import React, { useState } from "react";
import CourseForm from "../molecules/CourseForm";
import CourseItem from "../molecules/CourseItem";
import { INITIAL_COURSES } from "../../constants/admin";

const CourseManager = () => {
  const [courses, setCourses] = useState(INITIAL_COURSES);

  const addCourse = (title) => {
    const newCourse = {
      id: title.toLowerCase().replace(/\s+/g, "-"),
      title
    };
    setCourses([...courses, newCourse]);
  };

  return (
    <div>
      <CourseForm onAdd={addCourse} />

      <div className="admin-list">
        <h4>Courses</h4>
        {courses.map((c) => (
          <CourseItem key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
};

export default CourseManager;