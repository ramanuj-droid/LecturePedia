import React, { useState } from "react";
import AdminInput from "../atoms/AdminInput";
import AdminButton from "../atoms/AdminButton";

const CourseForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <div className="admin-card">
      <h3>Add Course</h3>

      <AdminInput
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <AdminButton text="Add Course" onClick={handleAdd} />
    </div>
  );
};

export default CourseForm;