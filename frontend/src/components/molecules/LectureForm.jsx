import React, { useState } from "react";
import AdminInput from "../atoms/AdminInput";
import AdminButton from "../atoms/AdminButton";

const LectureForm = ({ courses, onAdd }) => {
  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleAdd = () => {
    if (!courseId || !title || !url) return;
    onAdd({ courseId, title, url });
    setTitle("");
    setUrl("");
  };

  return (
    <div className="admin-card">
      <h3>Add Lecture</h3>

      <select
        className="admin-input"
        onChange={(e) => setCourseId(e.target.value)}
      >
        <option value="">Select Course</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.title}
          </option>
        ))}
      </select>

      <AdminInput
        placeholder="Lecture Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <AdminInput
        placeholder="Video URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <AdminButton text="Add Lecture" onClick={handleAdd} />
    </div>
  );
};

export default LectureForm;