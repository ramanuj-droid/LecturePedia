import React from "react";

const CourseItem = ({ course }) => {
  return <div className="list-item">{course.title}</div>;
};

export default CourseItem;