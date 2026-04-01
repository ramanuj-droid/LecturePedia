import React from "react";
import CourseGrid from "../molecules/CourseGrid";
import { COURSES } from "../../constants/courses";

const CourseSection = () => {
  return (
    <div className="course-section">
      <h2>My Courses</h2>
      <CourseGrid courses={COURSES} />
    </div>
  );
};

export default CourseSection;